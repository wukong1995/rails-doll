class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users, id: :uuid, default: 'uuid_generate_v4()' do |t|
      t.string :email
      t.string :user_name
      t.string :password
      t.integer :verify_code
      t.string :introduction

      t.timestamps
    end
  end
end
