class Relationship < ApplicationRecord
  belongs_to :user
  has_many :bucket_lists, dependent: :destroy
  has_many :date_activities, dependent: :destroy
  has_many :foods, dependent: :destroy
end
