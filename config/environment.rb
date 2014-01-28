# Load the rails application
require File.expand_path('../application', __FILE__)

# Initialize the rails application
WebsiteRubyRspecMongodb::Application.initialize!

ENV['RAILS_ENV'] = 'production'

if ENV['RAILS_ENV'] == "production"
  ActiveSupport::Deprecation.silenced = true
end