Rails.application.routes.draw do

  devise_for :users, :controllers => { :registrations => "user/registrations"}
  devise_scope :user do
    post '/users/sign_out' => 'devise/sessions#destroy'
  end

  resources :user_stocks, except: [:show, :edit, :update]

  root "welcome#index"

  get "my_portfolio", to: "users#my_portfolio"
  get "search_stocks", to: "stocks#search"

end
