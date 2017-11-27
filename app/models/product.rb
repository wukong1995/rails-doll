class Product < ApplicationRecord
  belongs_to :user
  has_many :cart_items

  validates :name, presence: true
  validates :price, presence: true

  acts_as_paranoid
end

# == Schema Information
#
# Table name: products
#
#  id          :uuid             not null, primary key
#  name        :string           not null
#  description :text
#  price       :float            not null
#  discount    :float            default(1.0)
#  is_add      :boolean          default(FALSE)
#  user_id     :uuid
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  deleted_at  :datetime
#
# Indexes
#
#  index_products_on_deleted_at  (deleted_at)
#  index_products_on_user_id     (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (user_id => users.id)
#
