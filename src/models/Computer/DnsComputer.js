import { monitoring } from '../monitor'

export class DnsComputer {
  async run({ ip }) {
    const command = 'cat /etc/bind/named.conf.local'

    return {
      command,
      output: await monitoring({ ip, command })
    }
  }
}