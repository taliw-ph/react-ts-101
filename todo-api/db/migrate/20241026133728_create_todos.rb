class CreateTodos < ActiveRecord::Migration[7.2]
  def change
    create_table :todos do |t|
      t.string :text
      t.boolean :completed

      t.timestamps
    end
  end
end
