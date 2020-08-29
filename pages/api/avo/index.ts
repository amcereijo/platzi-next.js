import { IncomingMessage, ServerResponse } from 'http'
import DB from '@database'

const db = new DB()

async function allAvos(req: IncomingMessage, res: ServerResponse) {
  const allEntries = await db.getAll()

  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({ data: allEntries, length: allEntries.length }))
}

export default allAvos
