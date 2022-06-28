Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  get '/legal', to: 'pages#legal', as: 'legal'
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  match '/404', to: 'errors#not_found', via: :all
  match '/500', to: 'errors#internal_server_error', via: :all
end
