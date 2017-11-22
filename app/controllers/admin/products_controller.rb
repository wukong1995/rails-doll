class Admin::ProductsController < Admin::BaseController
  def index
    @products = Product.page(params[:page]).per(10)
  end

  def create
    @product = Product.new(product_params)
    @product.user_id = current_user.id
    # authorize @product
    @product.save!
  end

  private

  def product_params
    params.require(:product).permit(:name, :description, :price, :discount)
  end
end
