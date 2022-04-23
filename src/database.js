import { connect } from 'mongoose'
import { MONGODB_URL } from './config/env.config';

(async () => {
  try {
    const {
      connection: { name },
    } = await connect(MONGODB_URL)
    console.log(`Connected to MongoDB to ${name}`)
  } catch (error) {
    console.error(`Error connecting to MongoDB ${error}`)
  }
})()