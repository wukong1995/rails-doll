json.recommends @recommends do |recommend|
  json.call(recommend, :id, :title, :desc, :category, :created_at)
end
json.total @recommends.total_count
