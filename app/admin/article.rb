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
			f.input :body, :input_html => { :class => 'autogrow', :rows => 10, :cols => 100, :maxlength => 10 }
			f.input :position_image_highlighted, :as => :select, :collection => ["None", "Left", "Right", "Center"]
			f.input :tags
		end
		f.actions
	end
end
