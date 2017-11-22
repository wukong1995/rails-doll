class ChangeNameInProduct < ActiveRecord::Migration[5.1]
  def change
    rename_column :products, :isAdd, :is_add
  end
end
