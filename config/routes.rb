Rails.application.routes.draw do
 namespace :api do 
  resources :books do 
    resources :reviews
  end
 end
end
