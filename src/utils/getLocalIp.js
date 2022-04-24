import { networkInterfaces } from 'os'

const interfaces = networkInterfaces()

export function getLocalIp() {
  return Object.keys(interfaces)
    .map((name) =>
      interfaces[name]
        .find((iface) => iface.family === 'IPv4' && !iface.internal)
    )
    .filter((iface) => iface !== undefined)
    .flatMap((iface) => iface.address)
    .join('')
}