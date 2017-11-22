class Product < ApplicationRecord
  belongs_to :user

  validates :name, presence: true
  validates :price, presence: true
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
#
# Indexes
#
#  index_products_on_user_id  (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (user_id => users.id)
#
