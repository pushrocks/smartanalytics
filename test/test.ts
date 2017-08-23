import { expect, tap } from 'tapbundle'

import * as smartanalytics from '../ts/index'

let testAnalytics: smartanalytics.Analytics

tap.test('should create a valid AnalyticsAccount', async () => {
  testAnalytics = new smartanalytics.Analytics({
    projectArg: 'pushrocks',
    appNameArg: 'smartanalytics',
    apiEndPointArg: 'pubapi-1.herokuapp.com/analytics'
  })
})

tap.test('should send a request to Google Analytics', async () => {
  let doit = async () => {
    await testAnalytics.recordEvent('npmtool', {
      smoeValue: 'someData'
    })
    await testAnalytics.recordEvent('anotherTool', {
      someValue: 'someData'
    })
  }
  doit()
})

tap.start()
