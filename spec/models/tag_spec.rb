require 'spec_helper'

describe Tag do
  	it "object tag create is valid?" do
		tag = FactoryGirl.create(:tag)    
		expect(tag).to be_valid
	end
end
