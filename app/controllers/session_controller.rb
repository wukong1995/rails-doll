class SessionController < ApplicationController
  def create
    @user = User.find_by(email: params[:email])

    if @user && @user.authenticate(params[:password])
      session[:user_id] = @user.id
      redirect_to user_path(@user)
    else 
      redirect_to new_session_path
    end
  end

  def index
    render 'signin'
  end

  def new
    render 'signup'
  end

  def signin
  end

  private
  def user_params
    params.require(:user).permit(:email, :username, :password)
  end
end
