import mongoose from 'mongoose'

const { Schema } = mongoose

/*

Recommended:
  - Update the entity model name value to that of your service name
  - Update the entity schema based on your requirements

*/

const entityModelName = 'Entity'
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
