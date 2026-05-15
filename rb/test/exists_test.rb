# QrCodeGenerator SDK exists test

require "minitest/autorun"
require_relative "../QrCodeGenerator_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = QrCodeGeneratorSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
