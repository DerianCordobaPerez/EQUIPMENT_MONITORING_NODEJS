import { monitoring } from '../monitor'

export class ClientComputer {
  async run({ ip }) {
    const command = 'hostname'

    return {
      command,
      output: await monitoring({ ip, command })
    }
  }
}