class AddEmployeeFlagToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :employee, :boolean, default: false
  end
end
