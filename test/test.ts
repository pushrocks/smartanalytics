import 'typings-test'

import { expect } from 'smartchai'

import * as smartanalytics from '../dist/index'

let testAccount: smartanalytics.AnalyticsAccount

describe('smartanalytics', function () {
  it('should create a valid AnalyticsAccount', function () {
    testAccount = new smartanalytics.AnalyticsAccount('smartanalytics', 'UA-92592300-1')
  })

  it('should send a request to Google Analytics', function () {
    let doit = async () => {
      await testAccount.sendEvent('npmtool', 'install', 'pushrocks/smartq')
      await testAccount.sendEvent('npmtool', 'started', 'pushrocks/smartanalytics')
      await testAccount.sendEvent('npmtool', 'install', 'pushrocks/smartq')
      await testAccount.sendEvent('npmtool', 'started', 'pushrocks/smartanalytics')
      await testAccount.sendEvent('npmtool', 'install', 'pushrocks/smartq')
      await testAccount.sendEvent('npmtool', 'started', 'pushrocks/smartanalytics')
      await testAccount.sendEvent('npmtool', 'install', 'pushrocks/smartq')
      await testAccount.sendEvent('npmtool', 'started', 'pushrocks/smartanalytics')
    }
    doit()
  })
})
