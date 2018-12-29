Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'home#index'
  get 'home/index'

  get 'categories/:category_name', to: 'categories#show', as: :category,
    constraints: { category_name: /game|book|makeup|default/ }

  # user
  get 'signin', to: 'sessions#index'
  post 'signin', to: 'sessions#create'
  get 'logout', to: 'sessions#logout'
  get 'signup', to: 'users#index'
  post 'signup', to: 'users#create'

  namespace :admin do
    root to: 'statistics#index'
    get '*path', to: 'statistics#index', constraints: ->(r) { r.format.html? }
    resources :users, only: %i[index]
    resources :recommends, only: %i[create show update destroy index]
  end

  get '*url', to: 'errors#render_404'
end
