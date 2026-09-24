
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { QrCodeGeneratorSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = QrCodeGeneratorSDK.test()
    equal(testsdk instanceof QrCodeGeneratorSDK, true,
      'QrCodeGeneratorSDK.test() must return a client synchronously')
  })

})
