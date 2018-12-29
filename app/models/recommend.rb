class Recommend < ApplicationRecord
  enum category: { game: 1, book: 2, makeup: 3, default: 0 }
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
