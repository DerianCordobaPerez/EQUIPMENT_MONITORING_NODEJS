import { monitoring } from '../monitor'

export class ServerComputer {
  async run({ ip }) {
    const command = 'web'

    return {
      command,
      output: await monitoring({ ip, command })
    }
  }
}