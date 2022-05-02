import { monitoring } from '../monitor'

export class ClientComputer {
  /**
   * It runs the `hostname` command on the remote server and returns the output
   * @returns The command and the output of the command.
   */
  async run({ ip }) {
    const command = 'hostname'

    return {
      command,
      output: await monitoring({ ip, command })
    }
  }
}