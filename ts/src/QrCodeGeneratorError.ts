
import { Context } from './Context'


class QrCodeGeneratorError extends Error {

  isQrCodeGeneratorError = true

  sdk = 'QrCodeGenerator'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  QrCodeGeneratorError
}

