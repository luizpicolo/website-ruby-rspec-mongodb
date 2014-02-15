class Article
	include Mongoid::Document
	include Mongoid::Timestamps
	include Mongoid::Slug

	field 	:title, type: String
	field 	:published_in, type: DateTime
	field 	:description, type: String
	field 	:body, type: String
	field 	:position_image_highlighted, type: String
	field	:image_highlighted, type: String
	field	:figure_caption, type: String
	slug 	:title, history: true

	has_and_belongs_to_many :tags

	validates :title, :body, :position_image_highlighted, presence: true
end
