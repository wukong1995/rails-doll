class ArticlePolicy < ApplicationPolicy
  def index?
    admin?
  end

  alias create? index?
  alias update? create?
  alias destroy? create?
end
