class InitSchema < ActiveRecord::Migration[5.2]
  def change
    # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"
  enable_extension "uuid-ossp"

  create_table "cart_items", id: :uuid, default: -> { "uuid_generate_v4()" }, force: :cascade do |t|
    t.uuid "user_id"
    t.uuid "product_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["product_id"], name: "index_cart_items_on_product_id"
    t.index ["user_id"], name: "index_cart_items_on_user_id"
  end

  create_table "order_items", id: :uuid, default: -> { "uuid_generate_v4()" }, force: :cascade do |t|
    t.string "name", null: false
    t.float "price", null: false
    t.float "discount", default: 1.0
    t.float "actual_price", null: false
    t.uuid "product_id", null: false
    t.uuid "order_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.datetime "deleted_at"
    t.index ["deleted_at"], name: "index_order_items_on_deleted_at"
    t.index ["order_id"], name: "index_order_items_on_order_id"
  end

  create_table "orders", id: :uuid, default: -> { "uuid_generate_v4()" }, force: :cascade do |t|
    t.float "price", null: false
    t.float "actual_price", null: false
    t.uuid "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.datetime "deleted_at"
    t.index ["deleted_at"], name: "index_orders_on_deleted_at"
    t.index ["user_id"], name: "index_orders_on_user_id"
  end

  create_table "products", id: :uuid, default: -> { "uuid_generate_v4()" }, force: :cascade do |t|
    t.string "name", null: false
    t.text "description"
    t.float "price", null: false
    t.float "discount", default: 1.0
    t.boolean "is_add", default: false
    t.uuid "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.datetime "deleted_at"
    t.index ["deleted_at"], name: "index_products_on_deleted_at"
    t.index ["user_id"], name: "index_products_on_user_id"
  end

  create_table "users", id: :uuid, default: -> { "uuid_generate_v4()" }, force: :cascade do |t|
    t.string "email", null: false
    t.string "name", null: false
    t.integer "verify_code"
    t.string "introduction"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "password_digest", default: "", null: false
    t.string "role", default: [], null: false, array: true
    t.index ["email"], name: "index_users_on_email", unique: true
  end

  add_foreign_key "cart_items", "products"
  add_foreign_key "cart_items", "users"
  add_foreign_key "order_items", "orders"
  add_foreign_key "orders", "users"
  add_foreign_key "products", "users"
  end
end
