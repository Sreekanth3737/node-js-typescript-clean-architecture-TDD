import express from 'express'
import { corsMiddleware } from '../middlewares'
import { jsonParser } from '../middlewares'
import { contentTypeMiddleware } from '../middlewares'
const app = express()

corsMiddleware(app)
jsonParser(app)
contentTypeMiddleware(app)

export { app }
