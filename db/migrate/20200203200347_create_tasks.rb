class CreateTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :tasks do |t|
      t.string  :name, null: false
      t.integer :gym_id, null: false
      t.timestamps
    end
  end
end
