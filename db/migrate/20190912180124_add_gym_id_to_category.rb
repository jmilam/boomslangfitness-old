class AddGymIdToCategory < ActiveRecord::Migration[5.2]
  def change
    add_column :categories, :gym_id, :integer
  end
end
