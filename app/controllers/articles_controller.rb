class ArticlesController < ApplicationController
  protect_from_forgery with: :null_session

  before_action :get_article, only: [:show, :edit, :update, :destroy]

  def index
    @articles = Article.all
  end

  def new
    @article = Article.new
    @formTitle = "New article"
    render 'form', layout: false
  end

  def create
    # render plain: params[:articles].inspect
    @article = Article.new(article_params)

    if @article.save
      redirect_to articles_path
    else
      render 'new'
    end
  end

  def show
  end

  def edit
    @formTitle = "Edit article"
    render 'form', layout: false
  end

  def update
    if @article.update(article_params)
      redirect_to articles_path
    else
      render 'new'
    end
  end

  def destroy
    authorize @article
    @article.destroy!
    render json: { success_code: 1}
  end

  private
    def article_params
      params.require(:article).permit(:title, :text)
    end

    def get_article
      @article = Article.find(params[:id])
    end
end
