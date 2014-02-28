class ApplicationController < ActionController::Base
	protect_from_forgery
	
	rescue_from ActionController::RoutingError, :with => :route_not_found
	rescue_from ActionController::MethodNotAllowed, :with => :invalid_method

	def route_not_found
		render :text => 'What the fuck are you looking for ?', :status => :not_found
	end

	def invalid_method
		message = "Now, did your mom tell you to #{request.request_method.to_s.upcase} that ?"
		render :text => message, :status => :method_not_allowed
	end

end
