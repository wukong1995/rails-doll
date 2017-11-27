class Order < ApplicationRecord
  has_many :order_items, dependent: :destroy
  belongs_to :user

  validates :price, presence: true
  validates :actual_price, presence: true

  acts_as_paranoid
end

# == Schema Information
#
# Table name: orders
#
#  id           :uuid             not null, primary key
#  price        :float            not null
#  actual_price :float            not null
#  user_id      :uuid
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  deleted_at   :datetime
#
# Indexes
#
#  index_orders_on_deleted_at  (deleted_at)
#  index_orders_on_user_id     (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (user_id => users.id)
#
