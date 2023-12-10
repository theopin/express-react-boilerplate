import type Database from '../interface/database.interface'
import pgPromise, { type IMain } from 'pg-promise'

class Postgres implements Database {
  pgp: IMain = pgPromise()
  db: any

  constructor (connectionString: string) {
    this.db = this.pgp(connectionString)
  }

  async connect (): Promise<void> {
    // You might not need a separate connect method with pg-promise.
    // Connections are managed automatically by the library.
  }

  async disconnect (): Promise<void> {
    await this.db.$pool.end()
  }

  /* eslint-disable no-template-curly-in-string */

  async createEntity (data: any): Promise<any> {
    return this.db.one('INSERT INTO user(${this:name}) VALUES(${this:csv}) RETURNING *', data)
  }

  async getOneEntity (_id: string): Promise<any> {
    return this.db.oneOrNone('SELECT * FROM user WHERE _id = $1', [_id])
  }

  async getOneEntityByUsername (username: string): Promise<any> {
    return this.db.oneOrNone('SELECT * FROM user WHERE username = $1', [username])
  }

  async getAllEntities (params: Partial<any>): Promise<any> {
    const condition = Object.keys(params).map((key, index) => `$${index + 1}:${key}`).join(' AND ')
    const values = Object.values(params)
    return this.db.manyOrNone(`SELECT * FROM user WHERE ${condition}`, values)
  }
  /* eslint-disable no-template-curly-in-string */

  async updateEntity (_id: string, newData: Partial<any>): Promise<any> {
    return this.db.oneOrNone('UPDATE user SET ${this:name} WHERE _id = $1 RETURNING *', [_id, newData])
  }

  async deleteEntity (_id: string): Promise<any> {
    return this.db.oneOrNone('DELETE FROM user WHERE _id = $1 RETURNING *', [_id])
  }
}

export default Postgres
