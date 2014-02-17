require 'spec_helper'

describe Slide do
  it "object slide create is valid?" do
		slide = FactoryGirl.create(:slide)    
		expect(slide).to be_valid
	end
end
