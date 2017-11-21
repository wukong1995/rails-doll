require 'rails_helper'

RSpec.describe User, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
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
