class CreateDateActivities < ActiveRecord::Migration[5.1]
  def change
    create_table :date_activities do |t|
      t.string :location
      t.string :activity
      t.belongs_to :relationship, foreign_key: true

      t.timestamps
    end
  end
end
