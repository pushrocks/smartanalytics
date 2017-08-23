import { expect, tap } from 'tapbundle'

import * as smartanalytics from '../ts/index'

let testAnalytics: smartanalytics.Analytics

tap.test('should create a valid AnalyticsAccount', async () => {
  testAnalytics = new smartanalytics.Analytics({
    projectIdArg: 'pushrocks',
    appNameArg: 'smartanalytics',
    apiEndPointArg: 'https://pubapi-1.lossless.one/analytics'
  })
})

tap.test('should send a request to Google Analytics', async () => {
  let doit = async () => {
    await testAnalytics.recordEvent('sandbox', {
      someValue: 'someData'
    })
    await testAnalytics.recordEvent('sandbox', {
      someValue: 'someData'
    })
  }
  doit()
})

tap.start()
