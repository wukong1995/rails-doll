Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'welcome#index'

  get 'welcome/index'

  resources :articles do
    resources :comments
  end

  get 'signin', to: 'sessions#index'
  get 'signup', to: 'sessions#new'
  get 'logout', to: 'sessions#logout'
  post 'signup', to: 'sessions#create'
  post 'signin', to: 'sessions#signin'

  get '*url', to: 'errors#render_404'
end
