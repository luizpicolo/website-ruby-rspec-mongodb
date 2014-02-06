class Article
	include Mongoid::Document
	include Mongoid::Timestamps
	include Mongoid::Slug

	field 	:title, type: String
	field 	:description, type: String
	field 	:body, type: String
	field 	:position_image_highlighted, type: String
	slug 	:title, history: true

	has_and_belongs_to_many :tags

	validates :title, :body, presence: true
end
