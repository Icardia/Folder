Rails.application.routes.draw do
  root controller: :rooms, action: :index

  
  resources :rooms
  resources :messages
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
