class Comment < ApplicationRecord
  belongs_to :article
end

# id: uuid
# commenter: string
# body: text
# article_id: uuid
# created_at: datetime
# updated_at: datetime
