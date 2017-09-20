class User < ApplicationRecord
  has_secure_password
end

# id: uuid
# email: string
# user_name: string
# password: string
# verify_code: integer
# introduction: string
# create_at: datetime
# update_at: datetime
