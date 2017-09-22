class ArticlesController < ApplicationController
  protect_from_forgery with: :null_session

  def index
    @articles = Article.all
  end

  def new
     @article = Article.new
  end

  def create
    # render plain: params[:articles].inspect
    @article = Article.new(article_params)

    if @article.save
      redirect_to @article
    else
      render 'new'
    end
  end

  def show
    @article = Article.find(params[:id])
  end

  def edit
    @article = Article.find(params[:id])
    render 'new'
  end

  def update
    @article = Article.find(params[:id])

    if @article.update(article_params)
      redirect_to @article
    else
      render 'new'
    end
  end

  def destroy
    @article = Article.find(params[:id])

    authorize @article
    @article.destroy!
    render json: { success_code: 1}
  end

  private
    def article_params
      params.require(:article).permit(:title, :text)
    end
end
