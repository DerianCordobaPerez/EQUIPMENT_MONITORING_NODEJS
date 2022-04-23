import { execSync } from 'child_process'

export const execute = async (command) => {
  return await execSync(command, {
    cwd: process.cwd(),
    encoding: 'utf8'
  })
}