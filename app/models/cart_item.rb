class CartItem < ApplicationRecord
  belongs_to :user
  belongs_to :product
end

# == Schema Information
#
# Table name: cart_items
#
#  id         :uuid             not null, primary key
#  user_id    :uuid
#  product_id :uuid
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_cart_items_on_product_id  (product_id)
#  index_cart_items_on_user_id     (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (product_id => products.id)
#  fk_rails_...  (user_id => users.id)
#
