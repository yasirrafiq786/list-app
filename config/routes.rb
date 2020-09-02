Rails.application.routes.draw do
  namespace :v1 do
    namespace :api do
      resources :items
      resources :lists
    end
  end
end
