require 'spec_helper'

describe ArticleController do

  describe "GET show" do
  	it "return one article valid?" do
  		get :show, {:title => "title-for-test"}
  		expect(assigns(:article).title).to eq("Title for Test")
  		expect(assigns(:article).body).to eq("Body for Test")
  	end

  	it "renders the show template" do
      get :show, {:title => "title-for-test"}
      expect(response).to render_template("show")
    end
  end

end
