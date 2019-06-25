class List < ApplicationRecord
  validates_presence_of :title, allow_blank: false
  belongs_to :board, foreign_key: 'board_id'
  has_many :cards, dependent: :destroy

end
