import * as plugins from './smartanalytics.plugins'

export class Analytics {
  projectId: string
  appName: string
  apiEndPoint: string
  secretKey: string = ''
  constructor (optionsArg: {
    projectIdArg: string
    appNameArg: string
    apiEndPointArg: string
    secretKeyArg?: string
  }) {
    this.projectId = optionsArg.projectIdArg
    this.appName = optionsArg.appNameArg
    this.apiEndPoint = optionsArg.apiEndPointArg
    if (optionsArg.secretKeyArg) {
      this.secretKey = optionsArg.secretKeyArg
    }
  }

  async recordEvent (eventIdentifierArg: string, analyticsDataArg: any) {
    let dataToSend = {
      projectId: this.projectId,
      appName: this.appName,
      eventIdentifier: eventIdentifierArg,
      analyticsData: analyticsDataArg
    }
    await plugins.smartrequest.post(this.apiEndPoint, {
      headers: {
        'authenticate': this.secretKey,
        'Content-Type': 'application/json'
      },
      requestBody: dataToSend
    }).catch(err => {
      console.log(err)
    })
  }
}
