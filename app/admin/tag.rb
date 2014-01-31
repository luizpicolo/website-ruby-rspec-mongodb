ActiveAdmin.register Tag do
	index do
		selectable_column 
		column :name
	    column :created_at
	    column :updated_at
	    
	    default_actions
	end
end
