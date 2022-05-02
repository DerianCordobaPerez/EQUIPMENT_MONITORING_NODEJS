import { monitoring } from '../monitor'

export class SnmpComputer {
  async run({ ip }) {
    const command = 'snmp'

    return {
      command,
      output: await monitoring({ ip, command })
    }
  }
}