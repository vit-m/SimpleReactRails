class Contact < ApplicationRecord
  scope :sorted, -> { order(:name) }

  validates :name, :email, presence: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }, uniqueness: true
end
