json.products @products do |product|
  json.call(
    product, :id, :name, :price, :discount, :is_add, :created_at
  )
end
json.total @products.total_count
