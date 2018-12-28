class DropTables < ActiveRecord::Migration[5.2]
  def change
    drop_table :cart_items
    drop_table :order_items
    drop_table :orders
    drop_table :products

    create_table :recommends, id: :uuid, default: -> { "uuid_generate_v4()" } do |t|
      t.string :title, null: false
      t.text :desc
      t.text :content
      t.integer :category, default: 0

      t.timestamps
    end
  end
end
