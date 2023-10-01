import type Database from '../interface/database.interface'
import mongoose from 'mongoose'

const newDocumentConfig = { new: true }

class MongoDb implements Database {
  static schema: mongoose.Schema
  static ModelObject: any

  constructor (schemaLayout: any, modelName: string) {
    MongoDb.schema = new mongoose.Schema(schemaLayout)
    MongoDb.ModelObject = mongoose.model(modelName, MongoDb.schema)
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
    const collection = new MongoDb.ModelObject(data)
    return collection.save()
  }

  async getOneEntity (_id: string): Promise<any> {
    return MongoDb.ModelObject.findOne({ _id }).exec()
  }

  async getAllEntities (params: Partial<any>): Promise<any> {
    return MongoDb.ModelObject.find({ params }).exec()
  }

  async updateEntity (_id: string, newData: Partial<any>): Promise<any> {
    return MongoDb.ModelObject.findOneAndUpdate({ _id }, newData, newDocumentConfig).exec()
  }

  async deleteEntity (_id: string): Promise<any> {
    return MongoDb.ModelObject.deleteOne({ _id }).exec()
  }
}

export default MongoDb
