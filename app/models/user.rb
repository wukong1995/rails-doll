class User < ApplicationRecord
  has_secure_password
  has_many :articles
  has_many :comments

  validates :email, presence: true
  validates :password, presence: true
  validates :user_name, presence: true, length: { minimum: 4, maxnum: 20}
end

# == Schema Information
#
# Table name: users
#
#  id              :uuid             not null, primary key
#  email           :string           not null
#  user_name       :string           not null
#  verify_code     :integer
#  introduction    :string
#  create_at       :datetime         default(Wed, 20 Sep 2017 05:37:16 UTC +00:00), not null
#  update_at       :datetime         default(Wed, 20 Sep 2017 05:37:16 UTC +00:00), not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  password_digest :string           default(""), not null
#  role            :string           default([]), not null, is an Array
#
