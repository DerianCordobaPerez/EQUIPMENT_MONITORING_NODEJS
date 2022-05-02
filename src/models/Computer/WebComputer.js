import { monitoring } from '../monitor'

export class WebComputer {
  /**
   * It runs the `web` command on the server with the given IP address and returns the output
   * @returns The command and the output of the command.
   */
  async run({ ip }) {
    const command = 'web'

    return {
      command,
      output: await monitoring({ ip, command })
    }
  }
}