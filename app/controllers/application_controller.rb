class ApplicationController < ActionController::Base
  include Pundit
  helper ApplicationHelper
  include ExceptionHandler

  protect_from_forgery with: :exception
end
