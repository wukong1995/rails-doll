class CommentPolicy < ApplicationPolicy
  def index?
    admin?
  end

  def create?
    signin?
  end
  alias destroy? create?
end
