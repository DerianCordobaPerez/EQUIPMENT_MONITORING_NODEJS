import { runCommands } from '../monitor'

export class Computer {
  constructor(type) {
    this.type = type
  }
  
  async run({ ip }) {
    return [
      await runCommands({ ip }),
      await this.type.run({ ip })
    ]
      .flat(Infinity)
  }
}