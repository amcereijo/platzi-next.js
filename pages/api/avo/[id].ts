import DB from '@database'
import { NextApiRequest, NextApiResponse } from 'next'

const db = new DB()

async function getAvo(req: NextApiRequest, res: NextApiResponse) {
  const id = <string>req.query.id

  const entry = await db.getById(id)

  res.status(200).json(entry)
}

export default getAvo
