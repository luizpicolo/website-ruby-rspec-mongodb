require 'spec_helper'

describe ChartController do

	describe "#articles_by_tags" do

		before(:each) do
			obj = ChartController.new
			@chart = obj.articles_by_tags
		end

		it "return valid array" do

			expect(@chart).to be_a_kind_of(Array) 
		end

		it "the content is a array" do
			
			expect(@chart.first).to be_a_kind_of(Array)
			expect(@chart.last).to be_a_kind_of(Array)			
		end

		it "type element is valid" do

			expect(@chart.first[0]).to be_a_kind_of(String)
			expect(@chart.last[1]).to be_a_kind_of(Fixnum)		 
		end	

	end

end
