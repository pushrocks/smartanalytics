import * as plugins from './smartanalytics.plugins'

export class Analytics {
  project: string
  appName: string
  apiEndPoint: string
  secretKey: string = ''
  constructor (optionsArg: {
    projectArg: string
    appNameArg: string
    apiEndPointArg: string
    secretKeyArg?: string
  }) {
    this.project = optionsArg.projectArg
    this.appName = optionsArg.appNameArg
    this.apiEndPoint = optionsArg.apiEndPointArg
    if (optionsArg.secretKeyArg) {
      this.secretKey = optionsArg.secretKeyArg
    }
  }

  async recordEvent (identifierArg: string, analyticsDataArg: any) {
    let dataToSend = {
      project: this.project,
      appName: this.appName,
      identifier: identifierArg,
      analyticsData: analyticsDataArg
    }
    console.log(dataToSend)
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
