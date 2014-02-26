ActiveAdmin.register Slide do
	index do
		selectable_column 
		column :title
	    column :created_at
	    column :updated_at
	    
	    default_actions
	end

	form :html => { :enctype => "multipart/form-data" } do |f|
		f.inputs "Articles" do
			f.input :title
			f.input :link
			f.input :image
			f.input :status, :as => :select, :collection => ["published", "unpublished"]
			
		end

		f.actions
	end
end
