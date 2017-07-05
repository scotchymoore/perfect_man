class CreateBucketLists < ActiveRecord::Migration[5.1]
  def change
    create_table :bucket_lists do |t|
      t.string :bucket_list_item
      t.string :location
      t.belongs_to :relationship, foreign_key: true

      t.timestamps
    end
  end
end
