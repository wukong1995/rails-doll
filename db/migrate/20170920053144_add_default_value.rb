class AddDefaultValue < ActiveRecord::Migration[5.1]
  def change
    change_column :users, :create_at, :datetime, null: false, default: Time.now
    change_column :users, :update_at, :datetime, null: false, default: Time.now
    change_column :users, :email,     :string,   null: false, unique: true
    change_column :users, :user_name, :string,   null: false
  end
end
