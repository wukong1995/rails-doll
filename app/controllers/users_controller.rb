class UsersController < ApplicationController
  def create
    user = User.find_by(email: user_params[:email])
    unless user.nil?
      redirect_to signup_path, :alert => '用户名已存在， 请登录'
      return
    end

    unless verify_rucaptcha?(params[:_rucaptcha])
      redirect_to signup_path, :alert => '验证码不正确'
      return
    end

    @user = User.new(user_params)

    @user.save!
  end

  def index
  end

   def user_params
    params.require(:user).permit(:email, :name, :password)
  end
end
