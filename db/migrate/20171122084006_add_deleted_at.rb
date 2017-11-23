class AddDeletedAt < ActiveRecord::Migration[5.1]
  def change
    add_column :articles, :deleted_at, :datetime
    add_index :articles, :deleted_at

    add_column :comments, :deleted_at, :datetime
    add_index :comments, :deleted_at

    add_column :orders, :deleted_at, :datetime
    add_index :orders, :deleted_at

    add_column :order_items, :deleted_at, :datetime
    add_index :order_items, :deleted_at

    add_column :products, :deleted_at, :datetime
    add_index :products, :deleted_at
  end
end
