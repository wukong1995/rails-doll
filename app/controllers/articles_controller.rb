class ArticlesController < ApplicationController
  protect_from_forgery with: :null_session

  def index
  end

  def new
  end

  def create
    render plain: params[:articles].inspect
  end
end
