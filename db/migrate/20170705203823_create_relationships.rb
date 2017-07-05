class CreateRelationships < ActiveRecord::Migration[5.1]
  def change
    create_table :relationships do |t|
      t.string :name
      t.date :dob
      t.string :pob
      t.text :misc
      t.string :flower
      t.date :annv
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
