import { connectDatabase } from '../config/database'

export const loadDatabase = async () => {
  await connectDatabase()
}
