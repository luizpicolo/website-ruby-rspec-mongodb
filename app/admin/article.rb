ActiveAdmin.register Article do
	index do
		selectable_column 
		column :title
	    column :published_in, :label => 'Create Date'
	    column :updated_at, :label => 'Update Date'
	    
	    default_actions
	end

	filter :title
	filter :published_in

	form :html => { :enctype => "multipart/form-data" } do |f|
		f.inputs "Articles" do
			f.input :title
			f.input :description
			f.input :published_in, :as => :date_picker
			f.input :body, :as => :ckeditor, :input_html => { :ckeditor => { :height => 400 } }
			f.input :position_image_highlighted, :as => :select, :collection => ["None", "Left", "Right", "Center"]
			f.input :image_highlighted
			f.input :figure_caption
			f.input :status, :as => :select, :collection => ["published", "unpublished"]
			f.input :tag_ids, :as => :check_boxes, :collection => Tag.asc(:name)

		end

		f.actions
	end
end
