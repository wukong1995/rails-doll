class CreateComments < ActiveRecord::Migration[5.1]
  def change
   create_table :comments, id: :uuid, default: 'uuid_generate_v4()' do |t|
      t.string :commenter
      t.text :body
      t.references :article, foreign_key: true, type: :uuid

      t.timestamps
    end
  end
end
