class Article < ApplicationRecord
  has_many :comments, dependent: :destroy
  belongs_to :author, class_name: 'User'

  validates :title, presence: true,
                   length: { minimum: 5}
  validates :text, presence: true
end

# id :uuid
# string :title
# text :text
