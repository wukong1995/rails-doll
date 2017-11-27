Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'home#index'
  get 'home/index'

  resources :products, only: %i[show]
  get 'cart', to: 'carts#show'
  post 'cart/add/:product_id', to: 'carts#add'
  post 'cart/delete/:card_item_id', to: 'carts#delete'
  post 'cart/drop', to: 'carts#drop'

  # user
  get 'signin', to: 'sessions#index'
  post 'signin', to: 'sessions#create'
  get 'logout', to: 'sessions#logout'
  get 'signup', to: 'users#index'
  post 'signup', to: 'users#create'

  namespace :admin do
    root to: 'statistics#index'
    get '*path', to: 'statistics#index', constraints: ->(r) { r.format.html? }
    resources :members, only: %i[index]
    resources :products, only: %i[create update destroy index]
    post 'products/:id/change', to: 'products#change_add'
    delete 'delete/multiple', to: 'products#destroy_multiple'
  end

  get '*url', to: 'errors#render_404'
end
