import mongoose, { Document, Model } from 'mongoose'

const twentyFiveSeconds = 25_000

export const MongoHelper = {
  client: mongoose,
  uri: '',

  async connect(uri: string = process.env.MONGO_URL || '') {
    if (!uri) {
      throw new Error('MongoDB URI is not defined')
    }
    this.uri = uri
    await mongoose.connect(uri, {
      connectTimeoutMS: twentyFiveSeconds
    })
  },

  async disconnect() {
    await mongoose.connection.close()
  },

  async getModel<T extends Document>(
    name: string,
    schema: mongoose.Schema
  ): Promise<Model<T>> {
    if (mongoose.connection.readyState === 0) {
      await this.connect(this.uri)
    }
    return mongoose.model<T>(name, schema)
  },

  mapInsertedIdToString: (doc: Document): string => {
    return (doc._id as mongoose.Types.ObjectId).toString()
  },

  mapDocumentIdToString: (doc: Document): string => {
    return (doc._id as mongoose.Types.ObjectId).toString()
  }
}
