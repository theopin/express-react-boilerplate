import type Database from '../interface/database.interface'
import MongoDb from '../mongodb/mongodb'
import { SupportedDatabases } from './supportedDatabases'

export function createDatabaseObject (selectedDatabase: number, connectionUrl: string): Database {
  switch (selectedDatabase) {
    case SupportedDatabases.MONGODB: {
      return new MongoDb(connectionUrl)
    }
    default: {
      // statements
      return new MongoDb(connectionUrl)
    }
  }
}
