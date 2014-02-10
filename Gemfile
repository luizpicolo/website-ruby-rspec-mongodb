source 'https://rubygems.org'

gem 'rails', '3.2.13'

# Bundle edge Rails instead:
# gem 'rails', :git => 'git://github.com/rails/rails.git'

# Gems used only for assets and not required
# in production environments by default.
group :assets do
  gem 'sass-rails',   '~> 3.2.3'
  #gem 'coffee-rails', '~> 3.2.1'

  # See https://github.com/sstephenson/execjs#readme for more supported runtimes
  # gem 'therubyracer', :platforms => :ruby
  
  gem 'uglifier', '>= 1.0.3'
end

#gem 'jquery-rails'

# C extensions to accelerate the Ruby BSON serialization
gem 'bson_ext'

# Active Admin
gem 'activeadmin-mongoid'
gem 'active_admin_editor'

group :development, :test do
	# RSpec
	gem 'rspec-rails', '~> 2.14'

  # Factory Girl
	gem "factory_girl_rails", "~> 4.0"
end

# Turbo Link
gem 'turbolinks'

# To use ActiveModel has_secure_password
gem "bcrypt-ruby", :require => "bcrypt"

# To use Jbuilder templates for JSON
# gem 'jbuilder'

# Use unicorn as the app server
# gem 'unicorn'
group :production do
  gem 'unicorn'
end

# Pretty URL
gem "mongoid_slug", "~> 2.0.1"

# Deploy with Capistrano
# gem 'capistrano'

# To use debugger
# gem 'debugger'
