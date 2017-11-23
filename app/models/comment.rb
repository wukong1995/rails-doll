class Comment < ApplicationRecord
  belongs_to :article
  belongs_to :user

  acts_as_paranoid
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
#  deleted_at :datetime
#
# Indexes
#
#  index_comments_on_article_id  (article_id)
#  index_comments_on_deleted_at  (deleted_at)
#  index_comments_on_user_id     (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (article_id => articles.id)
#  fk_rails_...  (user_id => users.id)
#
