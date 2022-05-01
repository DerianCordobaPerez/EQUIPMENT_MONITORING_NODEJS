import { monitoring } from '../monitor'

export class DnsComputer {
  async run({ ip }) {
    const command = 'dns'

    return {
      command,
      output: await monitoring({ ip, command })
    }
  }
}