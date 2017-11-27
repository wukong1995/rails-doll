class CartsController < ApplicationController
  before_action :load_product, only: %i[add delete drop]

  def add
    @cart = current_user.cart

  end

  def delete

  end

  def drop
    @cart = nil
    @cart.save!
  end

  private

  def load_cart
    unless current_user.cart = nil
      current_user.create_cart
    @cart = current_user.cart
  end

end

