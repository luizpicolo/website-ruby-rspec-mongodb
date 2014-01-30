require 'spec_helper'

describe Article do
  it "object article create is valid?" do
		article = Article.new({
			title: "Title for Test",
			description: "",
			body: "Body for Test",
			position_image_highlighted: ""
		})

		expect(article).to be_valid
	end
end
