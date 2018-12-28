class Admin::RecommendsController < Admin::BaseController
  before_action :load_recommend, only: %i[update destroy change_add show]

  def index
    @recommends = Recommend.page(params[:page]).per(10)
  end

  def create
    @recommend = Recommend.new(recommend_params)
    authorize @recommend
    @recommend.save!
  end

  def show
  end

  def update
    @recommend.update!(recommend_params)
  end

  def destroy
    @recommend.destroy!
  end

  private

  def load_recommend
    @recommend = Recommend.find(params[:id])
    authorize @recommend
  end

  def recommend_params
    params.require(:recommend).permit(:title, :desc, :category)
  end
end
