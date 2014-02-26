class Slide
  include Mongoid::Document
  include Mongoid::Timestamps

  field :title, type: String
  field :link, type: String
  field :image, type: String
  field :status, type: String, :default => "published"

  validates :title, :image, presence: true
end
