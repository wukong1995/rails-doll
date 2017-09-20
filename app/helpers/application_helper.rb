module ApplicationHelper
  def page_id
    return "#{controller_name}-#{action_name}"
  end

  def current_user
    return unless session[:user_id]
    @current_user ||= User.find(session[:user_id])
  end
end
