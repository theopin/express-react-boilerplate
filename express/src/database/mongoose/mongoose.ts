import type Database from '../interface/database.interface'
import mongoose from 'mongoose'

const newDocumentConfig = { new: true }

class Mongoose implements Database {
  constructor (schemaLayout: any, modelName: string) {
    this.schema = new mongoose.Schema(schemaLayout)
    this.ModelObject = mongoose.model(modelName, this.schema)
  }

  schema = new mongoose.Schema({ name: String, size: String })
  ModelObject = mongoose.model('Tank', this.schema)

  async connect (): Promise<void> {
    await mongoose.connect('mongodb://127.0.0.1:27017/test')
  }

  async disconnect (): Promise<void> {
    await mongoose.disconnect()
  }

  async createEntity (data: any): Promise<any> {
    const collection = new this.ModelObject(data)
    return await collection.save()
  }

  async getOneEntity (id: string): Promise<any> {
    return await this.ModelObject.findOne({ id }).exec()
  }

  async getAllEntities (params: Partial<any>): Promise<any> {
    return await this.ModelObject.find({ params }).exec()
  }

  async updateEntity (id: string, newData: Partial<any>): Promise<any> {
    return await this.ModelObject.findOneAndUpdate({ id }, newData, newDocumentConfig).exec()
  }

  async deleteEntity (id: string): Promise<any> {
    return await this.ModelObject.deleteOne({ id })
  }
}

export default Mongoose
