import { monitoring } from '../monitor'

export class DhcpComputer {
  async run({ ip }) {
    const command = 'dhcp'

    return {
      command,
      output: await monitoring({ ip, command })
    }
  }
}