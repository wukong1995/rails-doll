class Admin::ArticlesController < Admin::BaseController
  skip_before_action :verify_authenticity_token, :only => [:destroy]

  before_action :load_article, only: %i[show edit update destroy]

  def index
    @articles = Article.order(created_at: :desc).page(params[:page]).per(10)
    authorize @articles
  end

  def new
    @article = Article.new
    @form_title = 'New article'
    render 'form', layout: false
  end

  def create
    @article = Article.new(article_params)
    authorize @article
    @article.save!
    redirect_to admin_articles_path
  end

  def edit
    @form_title = 'Edit article'
    render 'form', layout: false
  end

  def update
    @article.update(article_params)
    redirect_to admin_articles_path
  end

  def destroy
    @article.destroy!
    redirect_to admin_articles_path
  end

  private

  def article_params
    params.require(:article).permit(:title, :text, :author_id)
  end

  def load_article
    @article = Article.find(params[:id])
    authorize @article
  end
end
