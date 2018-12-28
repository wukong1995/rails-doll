class Recommend < ApplicationRecord
  enum category: { default: 0, game: 1, book: 2, makeup: 3 }
end

# == Schema Information
#
# Table name: recommends
#
#  id         :uuid             not null, primary key
#  title      :string           not null
#  desc       :text
#  content    :text
#  category   :integer          default(0)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
