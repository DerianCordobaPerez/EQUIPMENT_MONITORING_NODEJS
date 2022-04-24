import { execute } from './command'

const commands = [
  'memory',
  'disk',
  'ip',
  'ports',
  'process',
  'users',
  'table',
  'logs',
  'read'
]

export async function monitoring({ ip, command }) {
  return await execute(`./monitoring.sh ${ip} ${command}`)
}

export async function runCommands({ ip }) {
  return await Promise.all(commands.map(async (command) => {
    return {
      command,
      output: await monitoring({ ip, command })
    }
  }))
}