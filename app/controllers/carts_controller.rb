class CartsController < ApplicationController
  before_action :load_cart, only: %i[add delete drop]

  def show
  end

  def add
    @cart_item = @carts.new(product_id: params[:product_id])
    @cart_item.save!
  end

  def delete
    @cart_item = @carts.find(params[:card_item_id])
    @cart_item.destroy!
  end

  def drop
    @carts = []
  end

  private

  def load_cart
    @carts = current_user.cart_items
  end

end

