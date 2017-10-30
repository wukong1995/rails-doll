module ApplicationHelper
  def page_id
    return "#{controller_name}-#{action_name}"
  end

  def display_notice_and_alert
    msg = ''
    msg << (content_tag :div, notice, :class => "alert alert-warning") if notice
    msg << (content_tag :div, alert, :class => "alert alert-danger") if alert
    sanitize msg
  end
end
