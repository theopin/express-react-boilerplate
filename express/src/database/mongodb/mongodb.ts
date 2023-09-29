import type Database from '../interface/database.interface'
import mongoose from 'mongoose'

const newDocumentConfig = { new: true }

class MongoDb implements Database {
  schema: mongoose.Schema
  ModelObject: any

  constructor (schemaLayout: any, modelName: string) {
    this.schema = new mongoose.Schema(schemaLayout)
    this.ModelObject = mongoose.model(modelName, this.schema)
  }

  async connect (): Promise<void> {
    mongoose.connection.on('connected', () => {
      console.log('Connected to MongoDB database successfully!')
    })

    mongoose.connection.on('error', (err) => {
      console.error(err)
      throw new Error('Failed to connect to MongoDB database!')
    })

    await mongoose.connect('mongodb://127.0.0.1:27017')
  }

  async disconnect (): Promise<void> {
    await mongoose.disconnect()
  }

  async createEntity (data: any): Promise<any> {
    const collection = new this.ModelObject(data)
    return collection.save()
  }

  async getOneEntity (id: string): Promise<any> {
    return this.ModelObject.findOne({ id }).exec()
  }

  async getAllEntities (params: Partial<any>): Promise<any> {
    return this.ModelObject.find({ params }).exec()
  }

  async updateEntity (id: string, newData: Partial<any>): Promise<any> {
    return this.ModelObject.findOneAndUpdate({ id }, newData, newDocumentConfig).exec()
  }

  async deleteEntity (id: string): Promise<any> {
    return this.ModelObject.deleteOne({ id })
  }
}

export default MongoDb
