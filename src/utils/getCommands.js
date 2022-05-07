import { readJson } from './readFile'

export async function getCommands() {
  const commands = await readJson({ filePath: './commands.json' })

  return Object
    .keys(commands)
    .map((key) => key)
}