class Admin::ProductsController < Admin::BaseController
  before_action :load_product, only: %i[update destroy change_add]

  def index
    @products = Product.page(params[:page]).per(10)
  end

  def create
    @product = current_user.products.new(product_params)
    authorize @product
    @product.save!
  end

  def update
    @product.update!(product_params)
  end

  def destroy
    @product.destroy!
  end

  def change_add
    current_add = @product.is_add
    @product.is_add = !current_add
    @product.save!
    render json: { success: true }
  end

  def destroy_multiple
    params[:ids].each do |id|
      @product = Product.find(id)
      @product.destroy!
    end
  end

  private

  def load_product
    @product = Product.find(params[:id])
    authorize @product
  end

  def product_params
    params.require(:product).permit(:name, :description, :price, :discount, :is_add)
  end
end
