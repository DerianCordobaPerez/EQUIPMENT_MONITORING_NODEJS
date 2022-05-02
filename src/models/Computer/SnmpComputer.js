import { monitoring } from '../monitor'

export class SnmpComputer {
  /**
   * It runs the `snmp` command on the given IP address and returns the output
   * @returns The command and the output of the command.
   */
  async run({ ip }) {
    const command = 'snmp'

    return {
      command,
      output: await monitoring({ ip, command })
    }
  }
}