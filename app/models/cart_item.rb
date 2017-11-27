class CartItem < ApplicationRecord
  belong_to :cart
  belong_to :product

  acts_as_paranoid
end

# == Schema Information
#
# Table name: cart_items
#
#  id         :uuid             not null, primary key
#  cart_id    :uuid
#  product_id :uuid
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_cart_items_on_cart_id     (cart_id)
#  index_cart_items_on_product_id  (product_id)
#
# Foreign Keys
#
#  fk_rails_...  (cart_id => carts.id)
#  fk_rails_...  (product_id => products.id)
#
