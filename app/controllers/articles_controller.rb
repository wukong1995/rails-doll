class ArticlesController < ApplicationController
  def index
    @articles = Article.order(created_at: :desc).page(params[:page]).per(10)
  end

  def show
    @article = Article.find(params[:id])
  end
end
