import { model, Schema } from 'mongoose'

const computerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  ip: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    required: true,
    default: 'computer',
  }
})

export default model('Computer', computerSchema)
