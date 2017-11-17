module ExceptionHandler
  extend ActiveSupport::Concern
  included do
    rescue_from ActiveRecord::RecordNotFound, with: :render_404
    rescue_from ActiveRecord::RecordNotUnique, with: :record_not_unqiue
    rescue_from ActiveRecord::RecordInvalid, with: :record_error_message
    rescue_from ActionController::RoutingError, with: :error_occurred
    rescue_from ::NameError, with: :error_occurred
    rescue_from Pundit::NotAuthorizedError, with: :user_not_authorized
  end

  private

  def render_404
    render file: "#{Rails.root}/public/404.html", layout: false, status: 404
  end

  def user_not_authorized(exception)
    respond_to do |format|
      format.html do
        policy_name = exception.policy.class.to_s.underscore
        flash[:alert] = t "#{policy_name}.#{exception.query}", scope: "pundit", default: :default
        redirect_back fallback_location: root_path
      end
      format.json { render json: { errors: [t('pundit.no_authorized')] }, status: 403 }
    end
  end

  def record_not_found(exception)
    render json: { error: exception.message }.to_json, status: 404
  end

  def record_error_message(e)
    flash[:alert] = e.message
    redirect_to action: 'index'
  end

  def error_occurred(exception)
    render json: { error: exception.message }.to_json, status: 500
  end

  def record_not_unqiue(exception)
    render json: { error: exception.message }.to_json, status: 422
  end

end
