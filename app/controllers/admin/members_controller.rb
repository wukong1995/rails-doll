class Admin::MembersController < ApplicationController
  def index
    @members = User.where(role: []).page(params[:page]).per(10)
  end
end
