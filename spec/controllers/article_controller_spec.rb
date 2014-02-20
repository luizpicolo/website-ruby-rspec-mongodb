require 'spec_helper'

describe ArticleController do

  let(:article) { FactoryGirl.create(:article) }

  describe "GET show" do
  	it "return one article valid?" do
  		get :show, {:title => article.slugs[-1]}
  		
      expect(assigns(:article).title).to eq(article.title)
  		expect(assigns(:article).body).to eq(article.body)
  	end

  	it "renders the show template" do
      get :show, {:title => article.slugs[-1]}
      
      expect(response).to render_template("show")
    end
  end

end
