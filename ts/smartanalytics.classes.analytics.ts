import * as plugins from './smartanalytics.plugins'

export class Analytics {
  projectId: string
  appName: string
  apiEndPoint: string
  secretKey: string = ''
  constructor (optionsArg: {
    projectId: string
    appName: string
    apiEndPoint: string
    secretKey?: string
  }) {
    this.projectId = optionsArg.projectId
    this.appName = optionsArg.appName
    this.apiEndPoint = optionsArg.apiEndPoint
    if (optionsArg.secretKey) {
      this.secretKey = optionsArg.secretKey
    }
  }

  async recordEvent (eventIdArg: string, analyticsDataArg: any) {
    let dataToSend = {
      projectId: this.projectId,
      appName: this.appName,
      eventId: eventIdArg,
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
