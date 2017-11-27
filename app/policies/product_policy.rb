class ProductPolicy < ApplicationPolicy
  def index?
    admin?
  end

  alias create? index?
  alias update? index?
  alias destroy? index?
  alias change_add? index?
  alias destroy_multiple? index?
end
