ActiveAdmin.register Article do
	index do
		column :title
	    column :tags
	    column :created_at
	    column :updated_at
	    
	    default_actions
	end

  filter :email

	form do |f|
		f.inputs "Articles" do
			f.input :title
			f.input :description
			f.input :body, as: :html_editor
			f.input :position_image_highlighted, :as => :select, :collection => ["None", "Left", "Right", "Center"]
			f.input :tags
		end
		f.actions
	end
end
