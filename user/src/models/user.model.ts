import mongoose from 'mongoose'

const { Schema } = mongoose

const entityModelName = 'Users'
const entitySchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
})

export { entitySchema, entityModelName }
