class CategoriesController < ApplicationController
  def show
    @recommends = Recommend.where(category: params['category_name'])
  end
end
