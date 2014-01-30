require 'spec_helper'

describe Tag do
  	it "object create is valid?" do
		tag = Tag.create
		tag.name = "Name for Tag"
		expect(tag).to be_valid
	end
end
