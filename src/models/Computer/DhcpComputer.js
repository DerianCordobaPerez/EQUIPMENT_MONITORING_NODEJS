import { monitoring } from '../monitor'

export class DhcpComputer {
  /**
   * It runs the `dhcp` command on the given IP address and returns the output
   * @returns The command and the output of the command.
   */
  async run({ ip }) {
    const command = 'dhcp'

    return {
      command,
      output: await monitoring({ ip, command })
    }
  }
}