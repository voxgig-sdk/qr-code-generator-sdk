
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { QrCodeGeneratorSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await QrCodeGeneratorSDK.test()
    equal(null !== testsdk, true)
  })

})
