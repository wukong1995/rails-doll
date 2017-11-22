class User < ApplicationRecord
  has_secure_password
  has_many :articles
  has_many :comments
  has_many :products
  has_many :orders

  validates :email, presence: true
  validates :password, presence: true
  validates :name, presence: true, length: { minimum: 4, maxnum: 20 }

  acts_as_paranoid
end

# == Schema Information
#
# Table name: users
#
#  id              :uuid             not null, primary key
#  email           :string           not null
#  name            :string           not null
#  verify_code     :integer
#  introduction    :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  password_digest :string           default(""), not null
#  role            :string           default([]), not null, is an Array
#
# Indexes
#
#  index_users_on_email  (email) UNIQUE
#
