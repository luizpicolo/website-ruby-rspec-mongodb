class Slide
  include Mongoid::Document
  field :title, type: String
  field :link, type: String
  field :image, type: String
end
