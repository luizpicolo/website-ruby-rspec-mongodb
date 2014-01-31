require 'spec_helper'

describe Article do
  it "object article create is valid?" do
		article = FactoryGirl.create(:article)    
		expect(article).to be_valid
	end
end
