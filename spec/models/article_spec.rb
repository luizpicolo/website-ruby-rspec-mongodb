require 'spec_helper'

describe Article do
  it "object article create is valid?" do
		article = Article.create
		article.title = "Title for Test"
		article.description = ""
		article.body = "Body for Test"
		article.position_image_highlighted = ""

		expect(article).to be_valid
	end
end
