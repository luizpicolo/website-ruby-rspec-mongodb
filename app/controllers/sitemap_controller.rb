class SitemapController < ApplicationController

	#layout false

	def index
		@static_pages = ["", "quem-sou", "portfolio", "publicacoes", "contato"]
		@articles = Article.all
		respond_to do |format|
		  format.xml
		end	
	end
end
