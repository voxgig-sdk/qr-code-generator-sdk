

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { QrCodeGeneratorSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('QrnEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when QR_CODE_GENERATOR_TEST_LIVE=TRUE.
  afterEach(liveDelay('QR_CODE_GENERATOR_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = QrCodeGeneratorSDK.test()
    const ent = testsdk.Qrn()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.QR_CODE_GENERATOR_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'qrn.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[],"name":"qrn","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"query":[{"active":true,"example":"TEXT","kind":"query","name":"data","orig":"data","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"example":300,"kind":"query","name":"size","orig":"size","reqd":true,"type":"`$INTEGER`","index$":1}]},"contract":{"id":"GET /qr/","json":"{\"operationId\":\"generateQRCode\",\"parameters\":[{\"description\":\"The data to encode in the QR code\",\"example\":\"TEXT\",\"in\":\"query\",\"name\":\"data\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The size of the QR code in pixels (width and height)\",\"example\":300,\"in\":\"query\",\"name\":\"size\",\"required\":true,\"schema\":{\"minimum\":1,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"image/png\":{\"schema\":{\"format\":\"binary\",\"type\":\"string\"}}},\"description\":\"Successfully generated QR code image\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message describing the invalid parameter\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Invalid parameters - error message specifying the issue\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/qr/","segments":[{"lit":"qr"}],"select":{"exist":["data","size"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"qrn","name__orig":"qrn","Name":"Qrn","name_":"qrn","name-":"qrn","NAME":"QRN","index$":0}, {"active":true,"entity":"qrn","key$":"BasicQrnFlow","kind":"basic","name":"BasicQrnFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"qrn_ref01","srcdatavar":"qrn_ref01_data","suffix":"_dt0"},"match":{},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-qrn_ref01"}}],"index$":0}]}, 'Qrn')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let qrn_ref01_data = Object.values(setup.data.existing.qrn)[0] as any

    // LOAD
    const qrn_ref01_ent = client.Qrn()
    const qrn_ref01_match_dt0: any = {}
    const qrn_ref01_data_dt0 = (await qrn_ref01_ent.load(qrn_ref01_match_dt0)).data()
    assert(null != qrn_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/qrn/QrnTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = QrCodeGeneratorSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['qrn01','qrn02','qrn03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'QR_CODE_GENERATOR_TEST_QRN_ENTID': idmap,
    'QR_CODE_GENERATOR_TEST_LIVE': 'FALSE',
    'QR_CODE_GENERATOR_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['QR_CODE_GENERATOR_TEST_QRN_ENTID']

  const live = 'TRUE' === env.QR_CODE_GENERATOR_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['QR_CODE_GENERATOR_TEST_QRN_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new QrCodeGeneratorSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.QR_CODE_GENERATOR_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
