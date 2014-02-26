class ChartController < ApplicationController

	def articles_by_tags
		array_tags = []

		tags = Tag.all

		tags.each do |tag|
			qtd = Article.any_in(tag_ids: tag._id).count
			array_tags << [tag.name, qtd]	
		end
		
		array_tags
	end

	def articles_by_date		
		hash_articles = Hash.new

		articles = Article.group_by(:published_in)
		articles.each do |a|
			hash_articles.store(a.created_at.to_s, articles.where(:published_in => a.published_in).count)
		end

		hash_articles
	end
end
