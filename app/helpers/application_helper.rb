module ApplicationHelper
  def page_id
    return "#{controller_name}-#{action_name}"
  end
end
