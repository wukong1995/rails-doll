class CreateCarts < ActiveRecord::Migration[5.1]
  def change
    create_table :carts, id: :uuid, default: 'uuid_generate_v4()' do |t|
      t.references :user, foreign_key: true, type: :uuid

      t.timestamps
    end
  end
end
