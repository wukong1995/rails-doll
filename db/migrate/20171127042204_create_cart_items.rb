class CreateCartItems < ActiveRecord::Migration[5.1]
  def change
    create_table :cart_items, id: :uuid, default: 'uuid_generate_v4()' do |t|
      t.references :user, foreign_key: true, type: :uuid
      t.references :product, foreign_key: true, type: :uuid

      t.timestamps
    end
  end
end
