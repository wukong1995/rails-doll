class SessionsController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save!
      redirect_to signup_path
    else
      redirect_to signin_path
    end
  end

  def index
    render 'signin'
  end

  def new
    render 'signup'
  end

  def signin
    @user = User.find_by(email: user_params[:email])
    
    if @user && @user.authenticate(user_params[:password])
      session[:user_id] = @user.id
      redirect_to root_url
    else 
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
