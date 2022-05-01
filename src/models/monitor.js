import { execute } from './command'
import { runSchedule } from './schedule'

const commands = [
  'memory',
  'disk',
  'ip',
  'ports',
  'process',
  'users',
  'table',
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

export function updateLogs({ ip }) {
  runSchedule(
    async () => await execute(`./monitoring.sh ${ip} logs`), 
    '*/5 * * * * *', 
    { ip }
  )
}