Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
    resources :relationships do
      resources :foods
      resources :date_activities
      resources :bucket_lists
    end
    resources :date_activities
    resources :bucket_lists
    resources :foods
    resources :photos


  end

  #Do not place any routes below this one
  get '*other', to: 'static#index'
end
