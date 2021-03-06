class Article
	include Mongoid::Document
	include Mongoid::Timestamps
	include Mongoid::Slug
  # include Mongoid::Elasticsearch
  # elasticsearch!

	field 	:title, type: String
	field 	:published_in, type: Date
	field 	:description, type: String
	field 	:body, type: String
	field 	:position_image_highlighted, type: String
	field	:image_highlighted, type: String
	field	:figure_caption, type: String
	slug 	:title, history: true
	field	:status, type: String

	has_and_belongs_to_many :tags

	validates :title, :body, :position_image_highlighted, :status, presence: true
end
