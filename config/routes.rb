Rails.application.routes.draw do
  namespace :api, defaults: { format: JSON } do
    namespace :v1 do
      resources :contacts, only: %i[create index]
    end
  end

  root 'index#index'
  match '*path', to: 'index#index', via: :all
end
