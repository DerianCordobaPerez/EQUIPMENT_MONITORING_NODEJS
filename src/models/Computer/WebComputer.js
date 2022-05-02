import { monitoring } from '../monitor'

export class WebComputer {
  async run({ ip }) {
    const command = 'web'

    return {
      command,
      output: await monitoring({ ip, command })
    }
  }
}