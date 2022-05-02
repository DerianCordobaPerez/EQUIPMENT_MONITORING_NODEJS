import { monitoring } from '../monitor'

export class DnsComputer {
  /**
   * It returns the output of the monitoring function with the command and ip passed in.
   * @returns The command and the output of the command.
   */
  async run({ ip }) {
    const command = 'dns'

    return {
      command,
      output: await monitoring({ ip, command })
    }
  }
}