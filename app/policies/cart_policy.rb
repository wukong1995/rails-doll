class CartPolicy < ApplicationPolicy
  def add?
    signin?
  end

  alias show? add?
  alias delete? add?
  alias drop? add?
end
