class RemoveTable < ActiveRecord::Migration[5.1]
  def change
    drop_table :comments
    drop_table :articles
  end
end
