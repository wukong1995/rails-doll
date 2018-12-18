json.users @users do |user|
  json.call(
    user, :id, :created_at, :email, :name
  )
end
json.total @users.total_count
