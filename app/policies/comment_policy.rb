class CommentPolicy < ApplicationPolicy
  def create?
    signin?
  end
  alias destroy? create?
end
