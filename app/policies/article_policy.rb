class ArticlePolicy < ApplicationPolicy
  def create?
    admin?
  end
  alias update? create?
  alias destroy? create?
end
