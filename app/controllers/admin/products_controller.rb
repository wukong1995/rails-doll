class Admin::ProductsController < Admin::BaseController
  def index
    @products = Product.page(params[:page]).per(10)
  end

  def new
    @article = Article.new
    @form_title = 'New article'
    render 'form', layout: false
  end

  private

  def product_params

  end
end
