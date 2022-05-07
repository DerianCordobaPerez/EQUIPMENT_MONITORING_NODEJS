import { readFile } from 'fs/promises'

export async function readJson({ filePath }) {
  const file = await readFile(filePath, 'utf-8') 
  return JSON.parse(file)
}