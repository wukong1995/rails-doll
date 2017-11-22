class Admin::ProductsController < Admin::BaseController
  before_action :load_product, only: %i[show update destroy]

  def index
    @products = Product.page(params[:page]).per(10)
  end

  def create
    @product = Product.new(product_params)
    @product.user_id = current_user.id
    # authorize @product
    @product.save!
  end

  def show
  end

  def update
    @product.update!(product_params)
  end

  def destroy
    @product.destroy!
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
  end

  def product_params
    params.require(:product).permit(:name, :description, :price, :discount, :is_add)
  end
end
