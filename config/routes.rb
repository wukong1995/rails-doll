Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'welcome#index'

  resources :articles do
    resources :comments
  end
  get 'signin', to: 'session#index'
  get 'signup', to: 'session#new'
  post 'signup', to: 'session#create'
  post 'signin', to: 'session#signin'
  
  get 'welcome/index'
end
