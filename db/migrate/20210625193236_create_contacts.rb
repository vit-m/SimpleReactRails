class CreateContacts < ActiveRecord::Migration[6.1]
  def change
    create_table :contacts do |t|
      t.string :name, index: true
      t.string :email, index: { unique: true }

      t.timestamps
    end
  end
end
