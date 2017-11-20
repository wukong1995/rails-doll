json.members @members do |member|
  json.call(
    member, :id, :created_at, :email, :name
  )
end
json.total @members.total_count
