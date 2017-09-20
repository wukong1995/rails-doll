class User < ApplicationRecord
  has_secure_password

  validates :email, presence: true
  validates :user_name, presence: true
  validates :password, presence: true
end

# id: uuid
# email: string
# user_name: string
# password_digest: string
# verify_code: integer
# introduction: string
# create_at: datetime
# update_at: datetime
