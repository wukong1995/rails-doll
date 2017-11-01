class Article < ApplicationRecord
  has_many :comments, dependent: :destroy
  belongs_to :author, class_name: 'User'

  validates :title, presence: true,
                   length: { minimum: 5 }
  validates :text, presence: true
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
