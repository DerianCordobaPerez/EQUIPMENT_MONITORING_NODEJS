import { readJson } from './readFile'

export async function getCommands() {
  const json = await readJson({ filePath: './commands.json' })

  const commands = Object
    .keys(json)
    .map((key) => key)

  return [
    ...commands,
    'read'
  ]
}