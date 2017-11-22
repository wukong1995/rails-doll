class Article < ApplicationRecord
  has_many :comments, dependent: :destroy
  belongs_to :author, class_name: 'User'

  validates :title, presence: true,
                   length: { minimum: 5 }
  validates :text, presence: true

  acts_as_paranoid
end

# == Schema Information
#
# Table name: articles
#
#  id         :uuid             not null, primary key
#  title      :string
#  text       :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  author_id  :uuid
#
# Indexes
#
#  index_articles_on_author_id  (author_id)
#
# Foreign Keys
#
#  fk_rails_...  (author_id => users.id)
#
