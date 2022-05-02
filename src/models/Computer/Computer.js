import { runCommands, updateLogs } from '../monitor'

export class Computer {
  constructor(type) {
    this.type = type
  }

  /**
   * It updates the logs with the ip address.
   */
  logs({ ip }) {
    updateLogs({ ip }) 
  }
  
  /**
   * It runs the commands and then runs the type.
   * @returns An array of arrays of objects.
   */
  async run({ ip }) {
    return [
      await runCommands({ ip }),
      await this.type.run({ ip })
    ]
      .flat(Infinity)
  }
}