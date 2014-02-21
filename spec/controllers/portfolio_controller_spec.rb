require 'spec_helper'

describe PortfolioController do
	describe "GET 'index'" do
	    it "returns http success" do
			get 'index'

	      	expect(response).to be_success
	    end

	    it 'return title and description' do
			get 'index'
			
			expect(assigns(:title)).to be_a_kind_of(String);
			expect(assigns(:description)).to be_a_kind_of(String);
		end
	end
end
