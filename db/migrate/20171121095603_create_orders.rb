class CreateOrders < ActiveRecord::Migration[5.1]
  def change
    create_table :orders, id: :uuid, default: 'uuid_generate_v4()' do |t|
      t.float :price, null: false
      t.float :actual_price, null: false

      t.references :user, foreign_key: true, type: :uuid

      t.timestamps
    end
  end
end
