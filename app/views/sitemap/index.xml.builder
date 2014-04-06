xml.instruct!
xml.urlset "xmlns" => "http://www.sitemaps.org/schemas/sitemap/0.9" do
	@static_pages.each do |page|
		xml.url do
			xml.loc "http://www.luizpicolo.com.br/#{page}"
			xml.lastmod("monthly")
		end
	end
	@articles.each do |article|
		xml.url do
			date = article.published_in.to_s.gsub("-", "/")
			url = article.slug
			xml.loc "http://www.luizpicolo.com.br/#{date}/#{url}"
			xml.lastmod article.updated_at.to_date
		end
	end
end