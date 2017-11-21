class CreateProducts < ActiveRecord::Migration[5.1]
  def change
    create_table :products, id: :uuid, default: 'uuid_generate_v4()' do |t|
      t.string :name, null: false
      t.text :description
      t.float :price, null: false
      t.float :discount, default: 1
      t.boolean :isAdd, default: false
      t.references :user, foreign_key: true, type: :uuid

      t.timestamps
    end
  end
end
