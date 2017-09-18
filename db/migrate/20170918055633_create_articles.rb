class CreateArticles < ActiveRecord::Migration[5.1]
  def change
    create_table :articles, id: :uuid, default: 'uuid_generate_v4()' do |t|
      t.string :title
      t.text :text

      t.timestamps
    end
  end
end
