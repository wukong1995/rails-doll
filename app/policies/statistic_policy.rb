class StatisticPolicy < ApplicationPolicy
  def index?
    admin?
  end
end
