import app from './server'
import { getLocalIp } from './utils/getLocalIp'

/**
 * The bootstrap function is an async function that listens on the port specified in the
 * app.get('port') function, and then logs a message to the console
 */
async function bootstrap() {
  app.listen(
    app.get('port'),
    getLocalIp(),
    () => console.log('Server running on port', app.get('port'))
  )
}

bootstrap()