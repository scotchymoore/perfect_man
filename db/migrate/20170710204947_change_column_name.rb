class ChangeColumnName < ActiveRecord::Migration[5.1]
  def change
    rename_column :foods, :type, :food_type
  end
end
