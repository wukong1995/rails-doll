module ExceptionHandler
  extend ActiveSupport::Concern
    included do
      rescue_from ::ActiveRecord::RecordNotFound, with: :render_404
      rescue_from ::ActiveRecord::RecordNotUnique, with: :record_not_unqiue
      rescue_from ::NameError, with: :error_occurred
      rescue_from ::ActionController::RoutingError, with: :error_occurred

    end
    private

    def render_404
      render file: "#{Rails.root}/public/404.html", layout: false, status: 404
    end
    def record_not_found(exception)
      render json: {error: exception.message}.to_json, status: 404
    end

    def error_occurred(exception)
      render json: {error: exception.message}.to_json, status: 500
    end

    def record_not_unqiue(exception)
      render json: {error: exception.message}.to_json, status: 422
    end
  end