class ApplicationController < ActionController::Base
  helper ApplicationHelper
  include ExceptionHandler

  protect_from_forgery with: :exception
end
