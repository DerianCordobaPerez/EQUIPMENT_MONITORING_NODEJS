import { monitoring } from '../monitor'

export class ServerComputer {
  async run({ ip }) {
    const command = 'cat /etc/apache2/apache2.conf'

    return {
      command,
      output: await monitoring({ ip, command })
    }
  }
}