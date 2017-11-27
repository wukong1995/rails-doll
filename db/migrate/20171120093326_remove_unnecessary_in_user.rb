class RemoveUnnecessaryInUser < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :create_at
    remove_column :users, :update_at
  end
end
