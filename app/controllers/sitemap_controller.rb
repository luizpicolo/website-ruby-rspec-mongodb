class SitemapController < ApplicationController

	layout false

	def index
		@article = Article.all
		respond_to do |format|
			format.xml { render :xml =>@article.to_xml }
		end			
	end

end
