class SessionsController < ApplicationController
  def index
  end

  def create
    user = User.find_by(email: user_params[:email])

    if user && user.authenticate(user_params[:password])
      session[:user_id] = user.id
      redirect_to root_url
      return
    else
      flash[:error] = '用户名或密码错误'
      redirect_to signin_path
    end
  end

  def logout
    reset_session
    redirect_to root_url
  end

  private

  def user_params
    params.require(:user).permit(:email, :name, :password)
  end
end
