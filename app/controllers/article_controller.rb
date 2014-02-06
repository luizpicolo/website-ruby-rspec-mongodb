class ArticleController < ApplicationController
	def show
  		@article = Article.find(params[:title]);
  	end
end
