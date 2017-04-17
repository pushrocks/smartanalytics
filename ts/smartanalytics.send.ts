import * as plugins from './smartanalytics.plugins'

export let event = (trackingIdArg: string, appNameArg: string, eventCategoryArg: string, eventActionArg, eventLabelArg: string = 'null') => {
  let payload: string = 'v=1' +
    `&tid=${trackingIdArg}` + // the tracking ID
    '&cid=555' +
    '&aip=1' + // anonymize the IP
    `&an=${appNameArg}` + // appName
    '&t=event' +
    `&ec=${eventCategoryArg}` + // event category
    `&ea=${eventActionArg}` + // event action
    `&el=${eventLabelArg}` + // event label
    '&ev=300' +
    `&an=${eventLabelArg}`
  send(payload)
}


let send = async (requestBodyArg: string) => {
  await plugins.smartrequest.post('https://www.google-analytics.com/collect', {
    requestBody: requestBodyArg
  })
}