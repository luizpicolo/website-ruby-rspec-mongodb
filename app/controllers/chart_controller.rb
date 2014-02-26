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
		#{"2013-02-10 00:00:00 -0800" => 11, "2013-02-11 00:00:00 -0800" => 6, "2013-02-12 00:00:00 -0800" => 3}
		hash_articles = Hash.new

		articles = Article.group_by(:created_at)
		articles.each do |a|
			hash_articles.store(a.created_at.to_s, 4)
		end

		hash_articles
	end
end
