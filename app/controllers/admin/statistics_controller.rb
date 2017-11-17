class Admin::StatisticsController < Admin::BaseController
  def index
    authorize :statistic
  end
end
