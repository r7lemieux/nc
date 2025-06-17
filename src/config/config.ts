export const local = {
  uiUrl: 'http://localhost:3000/',
}
export const emulator = {
  uiUrl: 'http://localhost:5000/',
  authenticationUrl: 'https://localhost:9099/costofwar-78f15',
  databaseUrl: 'http://localhost:8080/',
  cowFunctionUrl: 'http://localhost:5001/costofwar-78f15/us-central1/cowSurvey',
  contributeFunctionUrl: 'http://localhost:5001/costofwar-78f15/us-central1/contribute',
  compileFunctionUrl: 'http://localhost:5001/costofwar-78f15/us-central1/compile',
  statsFunctionUrl: 'http://localhost:5001/costofwar-78f15/us-central1/stats',

}
export const prod = {
  uiUrl: 'https://costofwar-78f15.web.app',
  cowFunctionUrl: 'https://us-central1-costofwar-78f15.cloudfunctions.net/cowSurvey',
  contributeFunctionUrl: 'https://us-central1-costofwar-78f15.cloudfunctions.net/contribute',
  compileFunctionUrl: 'https://us-central1-costofwar-78f15.cloudfunctions.net/compile',
  statsFunctionUrl: 'https://us-central1-costofwar-78f15.cloudfunctions.net/stats',

}

export const config = prod
