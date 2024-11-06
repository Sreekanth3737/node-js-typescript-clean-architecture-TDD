import { Express } from 'express'
import {
  contentTypeMiddleware,
  corsMiddleware,
  jsonParser
} from '../middlewares'

export default (app: Express): void => {
  jsonParser(app)
  corsMiddleware(app)
  contentTypeMiddleware(app)
}
