require 'spec_helper'

describe ArticleController do

  describe "GET show" do
  	it "return one article valid?" do
  		get :show
  		expect(assigns(:article)).to eq(Article.new.title)
  		expect(assigns(:article)).to eq(Article.new.body)
  	end

  	it "renders the show template" do
      get :show
      expect(response).to render_template("show")
    end
  end

end
