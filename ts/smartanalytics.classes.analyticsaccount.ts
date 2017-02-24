import * as plugins from './smartanalytics.plugins'
import * as send from './smartanalytics.send'

export class AnalyticsAccount {
  appName: string
  trackingId: string
  constructor(appNameArg: string, trackingIdArg: string) {
    this.appName = appNameArg
    this.trackingId = trackingIdArg
  }

  sendEvent (eventCategoryArg, eventActionArg, eventLabelArg: string) {
    send.event(this.trackingId, this.appName, eventCategoryArg, eventActionArg, eventLabelArg)
  }
}
