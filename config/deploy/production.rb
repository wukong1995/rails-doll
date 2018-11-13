if File.exist?('config/deploy_rsa')
  set :ssh_options, keys: ['config/deploy_rsa']
  set :identity_cmd, ' -i config/deploy_rsa'
end

server 'wukong.dival.cn', user: 'wong', roles: %w[app db web], primary: true, port: 3000
set :server_name, 'wukong.dival.cn'
set :rbenv_ruby, '2.5.1'
set :rails_env, 'production'
set :branch, 'master'

set :disallow_pushing, true

set :rsync_cmd,        "rsync -av --delete -e 'ssh -p 3000#{fetch(:identity_cmd)}'"


# Global options
# --------------
#  set :ssh_options, {
#    keys: %w(/home/rlisowski/.ssh/id_rsa),
#    forward_agent: false,
#    auth_methods: %w(password)
#  }
#
# The server-based syntax can be used to override options:
# ------------------------------------
# server "example.com",
#   user: "user_name",
#   roles: %w{web app},
#   ssh_options: {
#     user: "user_name", # overrides user setting above
#     keys: %w(/home/user_name/.ssh/id_rsa),
#     forward_agent: false,
#     auth_methods: %w(publickey password)
#     # password: "please use keys"
#   }
