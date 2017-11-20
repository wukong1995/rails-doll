class Admin::MembersController < ApplicationController
  def index
    @members = User.page(params[:page]).per(10)
  end
end
