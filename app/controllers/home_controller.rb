class HomeController < ApplicationController

	#caches_page :index

	def index
		@articles = Article.where(status: "published").order_by(:published_in.desc).page(params[:page]).per(7)
		@title = "Desenvolvimento Web"
		@description = "Blog sobre Ruby, Ruby on Rails, PHP, Banco e Dados, desenvolvimento de software, gerenciamento de projetos e tecnologia em geral"
		@slides = Slide.where(status: "published");
	end

  def search(text)
    result = Article.es.search text
    result.raw_response
    result.results
  end

end
