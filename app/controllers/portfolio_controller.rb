class PortfolioController < ApplicationController
	def index
		@title = "Portfolio"
		@description = "O portfolio de um programador, na minha opinião, não deve ser exatamente o produto final dos projetos que o mesmo participou, mas sim o código criado pelo mesmo. Por este motivo, nesta página, estou disponibilizando grande parte dos projetos executados nas linguagem que trabalho."
	end
end
