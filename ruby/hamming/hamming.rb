class Hamming
  VERSION = 1
  def self.compute(one, two)
    raise ArgumentError if (one.length != two.length)
    array_one = one.chars
    array_two = two.chars
    equals = []
    array_one.each_with_index do |letter, index|
      equals << (letter == array_two[index])
    end
  equals.count(false)  
  end
end