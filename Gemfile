source 'https://rubygems.org'
ruby "2.0.0"

gem 'rails', '3.2.13'

group :assets do
  gem 'sass-rails',   '~> 3.2.3' 
  gem 'uglifier', '>= 1.0.3'
end

gem 'bson_ext'
gem 'activeadmin-mongoid'
gem "ckeditor"

group :development, :test do
	gem 'rspec-rails', '~> 2.14'
	gem "factory_girl_rails", "~> 4.0"
end

gem 'turbolinks'
gem "bcrypt-ruby", :require => "bcrypt"

group :production do
  gem 'unicorn'
  gem 'rails_12factor'
end

group :test do
  gem 'simplecov', :require => false
end

gem "mongoid_slug", "~> 2.0.1"
gem "chartkick"

gem 'kaminari'
gem 'mongoid-elasticsearch'