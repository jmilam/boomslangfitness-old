class AddWorkoutIdToExercise < ActiveRecord::Migration[5.1]
  def change
    add_column :exercises, :workout_id, :integer
  end
end
