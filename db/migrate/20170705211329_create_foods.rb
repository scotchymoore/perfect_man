class CreateFoods < ActiveRecord::Migration[5.1]
  def change
    create_table :foods do |t|
      t.text :restaurant
      t.string :type, null: false
      t.text :location
      t.belongs_to :relationship, foreign_key: true

      t.timestamps
    end
  end
end
