# QrCodeGenerator SDK utility: prepare_body
require_relative 'media'
module QrCodeGeneratorUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return QrCodeGeneratorUtilities.raw_body(ctx.reqdata) if QrCodeGeneratorUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
