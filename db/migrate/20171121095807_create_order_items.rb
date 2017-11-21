class CreateOrderItems < ActiveRecord::Migration[5.1]
  def change
    create_table :order_items, id: :uuid, default: 'uuid_generate_v4()' do |t|
      t.string :name, null: false
      t.float :price, null: false
      t.float :discount, default: 1
      t.float :actual_price, null: false
      t.uuid :product_id, null: false
      t.references :order, foreign_key: true, type: :uuid

      t.timestamps
    end
  end
end
