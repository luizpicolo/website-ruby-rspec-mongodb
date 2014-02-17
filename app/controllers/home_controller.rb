class HomeController < ApplicationController
	def index
		@articles = Article.order_by(:published_in.desc)
		@title = "Luiz Picolo - Desenvolvimento Web"
		@description = "Sou licenciado em História pela Universidade Federal de Mato Grosso do Sul - UFMS (2011) / Campus de Nova Andradina - CPNA. Atualmente sou graduando em Tecnologia em Análise e Desenvolvimento de Sistemas pelo Instituto Federal de Educação, Ciência e Tecnologia de Mato Grosso do Sul - TADS - IFMS (2012) / Campus de Nova Andradina."
		@slides = Slide.all();
	end
end
