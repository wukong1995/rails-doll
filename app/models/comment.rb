class Comment < ApplicationRecord
  belongs_to :article
  belongs_to :user
end

# == Schema Information
#
# Table name: comments
#
#  id         :uuid             not null, primary key
#  body       :text
#  article_id :uuid
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :uuid
#
