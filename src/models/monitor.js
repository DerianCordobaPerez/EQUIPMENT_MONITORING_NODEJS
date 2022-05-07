import { execute } from './command'
import { runSchedule } from './schedule'
import { getCommands } from '../utils/getCommands'

/**
 * It executes a shell script with the given arguments
 * @returns The output of the command being executed.
 */
export async function monitoring({ ip, command }) {
  return await execute(`./monitoring.sh ${ip} ${command}`)
}

/**
 * It takes an IP address as an argument, and returns an array of objects, each containing a command
 * and its output
 * @returns An array of objects with the command and the output of the command.
 */
export async function runCommands({ ip }) {
  const commands = await getCommands()

  return await Promise.all(commands
    .map(async (command) => {
      return {
        command,
        output: await monitoring({ ip, command })
      }
    })
  )
}

/**
 * > It runs a shell script every 5 seconds, and passes the IP address of the server as an argument to
 * the script
 */
export function updateLogs({ ip }) {
  runSchedule(
    async () => await execute(`./monitoring.sh ${ip} logs`), 
    '*/5 * * * * *', 
    { ip }
  )
}