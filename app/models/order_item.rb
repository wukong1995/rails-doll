class OrderItem < ApplicationRecord
  belongs_to :order

  validates :name, presence: true
  validates :price, presence: true
  validates :actual_price, presence: true

  acts_as_paranoid
end

# == Schema Information
#
# Table name: order_items
#
#  id           :uuid             not null, primary key
#  name         :string           not null
#  price        :float            not null
#  discount     :float            default(1.0)
#  actual_price :float            not null
#  product_id   :uuid             not null
#  order_id     :uuid
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  deleted_at   :datetime
#
# Indexes
#
#  index_order_items_on_deleted_at  (deleted_at)
#  index_order_items_on_order_id    (order_id)
#
# Foreign Keys
#
#  fk_rails_...  (order_id => orders.id)
#
