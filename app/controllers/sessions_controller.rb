class SessionsController < ApplicationController
  def create
    user = User.find_by(email: user_params[:email])
    if user != nil
      redirect_to signup_path, :alert => "用户名已存在， 请登录"
      return
    end

    if !verify_rucaptcha?(params[:_rucaptcha])
      redirect_to signup_path, :alert => "验证码不正确"
      return
    end

    @user = User.new(user_params)

    if !@user.save
      redirect_to signup_path, :alert => @user.errors
    end
  end

  def index
    render 'signin'
  end

  def new
    render 'signup'
  end

  def signin
    user = User.find_by(email: user_params[:email])

    if user && user.authenticate(user_params[:password])
      session[:user_id] = user.id
      redirect_to root_url
      return
    else
      flash[:error] = "用户名或密码错误"
      redirect_to signin_path
    end
  end

  def logout
    reset_session
    redirect_to root_url
  end

  private
    def user_params
      params.require(:user).permit(:email, :user_name, :password)
    end
end
