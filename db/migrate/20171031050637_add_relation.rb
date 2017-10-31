class AddRelation < ActiveRecord::Migration[5.1]
  def change
    remove_column :comments, :commenter, type: :string
    add_reference :comments, :user, foreign_key: true, type: :uuid
    add_reference :articles, :user, foreign_key: true, type: :uuid
    rename_column :articles, :user_id, :author_id
  end
end
