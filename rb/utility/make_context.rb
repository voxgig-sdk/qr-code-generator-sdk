# QrCodeGenerator SDK utility: make_context
require_relative '../core/context'
module QrCodeGeneratorUtilities
  MakeContext = ->(ctxmap, basectx) {
    QrCodeGeneratorContext.new(ctxmap, basectx)
  }
end
