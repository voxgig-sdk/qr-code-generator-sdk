# QrCodeGenerator SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module QrCodeGeneratorFeatures
  def self.make_feature(name)
    case name
    when "base"
      QrCodeGeneratorBaseFeature.new
    when "test"
      QrCodeGeneratorTestFeature.new
    else
      QrCodeGeneratorBaseFeature.new
    end
  end
end
