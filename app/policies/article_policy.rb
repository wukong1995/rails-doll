class ArticlePolicy < ApplicationPolicy
  def index?
    admin?
  end

  alias create? index?
  alias update? index?
  alias destroy? index?
end
