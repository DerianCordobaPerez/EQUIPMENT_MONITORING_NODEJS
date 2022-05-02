import { ClientComputer } from './ClientComputer'
import { WebComputer } from './WebComputer'
import { DnsComputer } from './DnsComputer'
import { DhcpComputer } from './DhcpComputer'
import { SnmpComputer } from './SnmpComputer'
import { Computer } from './Computer'

export class ComputerFactory {
  #type

  #computerStrategies = {
    client: new Computer(new ClientComputer()),
    web: new Computer(new WebComputer()),
    dns: new Computer(new DnsComputer()),
    dhcp: new Computer(new DhcpComputer()),
    snmp: new Computer(new SnmpComputer())
  }

  constructor(type) {
    this.#type = type
    this.computer = this.#computerStrategies[this.#type]
  }

  async init({ ip }) {
    return await this
      .computer
      .run({ ip })
  }
}