import { execSync } from 'child_process'

export async function execute(command) {
  return await execSync(command, {
    cwd: process.cwd(),
    encoding: 'utf8'
  })
}