ActiveAdmin.register Slide do
	index do
		selectable_column 
		column :title
	    column :created_at
	    column :updated_at
	    
	    default_actions
	end
end
