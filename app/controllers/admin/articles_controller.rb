class Admin::ArticlesController < Admin::BaseController
  skip_before_action :verify_authenticity_token, :only => [:destroy]

  before_action :get_article, only: %i[:show, :edit, :update, :destroy]

  def index
    @articles = Article.all
  end

  def new
    @article = Article.new
    @form_title = 'New article'
    render 'form', layout: false
  end

  def create
    Article.create!(article_params)
    redirect_to admin_articles_path
  end

  def edit
    @form_title = 'Edit article'
    render 'form', layout: false
  end

  def update
    authorize @article
    @article.update(article_params)
    redirect_to admin_articles_path
  end

  def destroy
    authorize @article
    @article.destroy!
    # redirect_to admin_articles_path
  end

  private

  def article_params
    params.require(:article).permit(:title, :text, :author_id)
  end

  def get_article
    @article = Article.find(params[:id])
  end
end
