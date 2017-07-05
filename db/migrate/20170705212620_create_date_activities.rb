class CreateDateActivities < ActiveRecord::Migration[5.1]
  def change
    create_table :date_activities do |t|
      t.string :location
      t.string :activity

      t.timestamps
    end
  end
end
