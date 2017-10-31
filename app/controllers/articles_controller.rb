class ArticlesController < ApplicationController
  skip_before_action :verify_authenticity_token, :only => [:destroy]

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
    @article = Article.new(article_params)
    @article.save!
    redirect_to articles_path
  end

  def show
  end

  def edit
    @formTitle = "Edit article"
    render 'form', layout: false
  end

  def update
    authorize @article
    @article.update(article_params)
    redirect_to articles_path
  end

  def destroy
    authorize @article
    @article.destroy!
    render json: { success_code: 1}
  end

  private
    def article_params
      params.require(:article).permit(:title, :text, :author_id)
    end

    def get_article
      @article = Article.find(params[:id])
    end
end
