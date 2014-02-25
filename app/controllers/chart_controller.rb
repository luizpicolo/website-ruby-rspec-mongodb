class ChartController < ApplicationController

	def teste
		array_tags = []

		tags = Tag.all

		tags.each do |tag|
			qtd = Article.any_in(tag_ids: tag._id).count
			array_tags << [tag.name, qtd]	
		end
		
		array_tags
	end
end
