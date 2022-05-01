import { runCommands, updateLogs } from '../monitor'

export class Computer {
  constructor(type) {
    this.type = type
  }

  logs({ ip }) {
    updateLogs({ ip }) 
  }
  
  async run({ ip }) {
    return [
      await runCommands({ ip }),
      await this.type.run({ ip })
    ]
      .flat(Infinity)
  }
}