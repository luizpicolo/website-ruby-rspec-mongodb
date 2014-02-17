class ArticleController < ApplicationController
	def show
  		@article = Article.find(params[:title]);
  		@title = @article.title
		@description = @article.description
  	end
end
