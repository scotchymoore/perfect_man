class Relationship < ApplicationRecord
  belongs_to :user
  has_many :bucket_lists, dependant: :destroy
  has_many :date_activities, dependant: :destroy
  has_many :foods, dependant: :destroy
end
