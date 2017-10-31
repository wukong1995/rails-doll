class User < ApplicationRecord
  has_secure_password
  has_many :articles
  has_many :comments

  validates :email, presence: true
  validates :user_name, presence: true, length: { minimum: 4, maxnum: 20}
end

# id: uuid
# email: string
# user_name: string
# roles: [string]
# password_digest: string
# verify_code: integer
# introduction: string
# create_at: datetime
# update_at: datetime
