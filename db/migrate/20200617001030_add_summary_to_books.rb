class AddSummaryToBooks < ActiveRecord::Migration[6.0]
  def change
    add_column :books, :summary, :string
  end
end
