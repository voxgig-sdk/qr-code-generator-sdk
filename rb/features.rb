# QrCodeGenerator SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module QrCodeGeneratorFeatures
  def self.make_feature(name)
    case name
    when "base"
      QrCodeGeneratorBaseFeature.new
    when "ratelimit"
      QrCodeGeneratorRatelimitFeature.new
    when "retry"
      QrCodeGeneratorRetryFeature.new
    when "test"
      QrCodeGeneratorTestFeature.new
    when "timeout"
      QrCodeGeneratorTimeoutFeature.new
    else
      QrCodeGeneratorBaseFeature.new
    end
  end
end
