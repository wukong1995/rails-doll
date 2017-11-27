class Cart < ApplicationRecord
  def self.items
    current_user.cart_items
  end
end

