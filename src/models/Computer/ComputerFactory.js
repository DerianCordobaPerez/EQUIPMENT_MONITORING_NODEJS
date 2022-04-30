import { ClientComputer } from './ClientComputer'
import { ServerComputer } from './ServerComputer'
import { DnsComputer } from './DnsComputer'
import { DhcpComputer } from './DhcpComputer'
import { Computer } from './Computer'

export class ComputerFactory {
  #type

  #computerStrategies = {
    client: new Computer(new ClientComputer()),
    server: new Computer(new ServerComputer()),
    dns: new Computer(new DnsComputer()),
    dhcp: new Computer(new DhcpComputer())
  }

  constructor(type) {
    this.#type = type
  }

  async init({ ip }) {
    const computer = this.#computerStrategies[this.#type]

    return await computer
      .run({ ip })
  }
}