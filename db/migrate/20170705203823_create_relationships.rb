class CreateRelationships < ActiveRecord::Migration[5.1]
  def change
    create_table :relationships do |t|
      t.string :name
      t.date :dob
      t.string :place_of_birth
      t.text :misc
      t.string :flower
      t.date :anniversary
      t.date :first_date
      t.string :street
      t.string :city
      t.string :state
      t.string :zip
      t.string :top_size
      t.string :bottom_size
      t.string :shoe_size
      t.string :bust_size
      t.string :height
      t.belongs_to :user, foreign_key: true


      t.timestamps
    end
  end
end
