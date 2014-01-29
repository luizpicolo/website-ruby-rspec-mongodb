class Article
  include Mongoid::Document
  include Mongoid::Timestamps

  field :title, type: String
  field :tags, type: String
  field :description, type: String
  field :body, type: String
  field :position_image_highlighted, type: String

  validates :title, :body, presence: true

end
