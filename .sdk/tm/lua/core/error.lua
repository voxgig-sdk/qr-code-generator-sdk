-- QrCodeGenerator SDK error

local QrCodeGeneratorError = {}
QrCodeGeneratorError.__index = QrCodeGeneratorError


function QrCodeGeneratorError.new(code, msg, ctx)
  local self = setmetatable({}, QrCodeGeneratorError)
  self.is_sdk_error = true
  self.sdk = "QrCodeGenerator"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function QrCodeGeneratorError:error()
  return self.msg
end


function QrCodeGeneratorError:__tostring()
  return self.msg
end


return QrCodeGeneratorError
