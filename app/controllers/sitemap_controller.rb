class SitemapController < ApplicationController

	#layout false

	def index
		@static_pages = ["", "quem-sou", "portfolio", "publicacoes", "contato"]
		@articles = Article.order_by(:published_in.desc)
		respond_to do |format|
		  format.xml
		end	
	end
end
