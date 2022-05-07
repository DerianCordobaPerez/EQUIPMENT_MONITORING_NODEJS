import { execSync } from 'child_process'

/**
 * It executes a command in the terminal and returns the output
 * @param command - The command to execute.
 * @returns The result of the command being executed.
 */
export async function execute(command) {
  return await execSync(command, {
    cwd: process.cwd(),
    encoding: 'utf8',
  })
}