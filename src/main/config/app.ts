import express from 'express'
import setupStatic from '../middlewares/static'
import setupMiddlewares from './setup-middlewares'

const app = express()

setupStatic(app)
setupMiddlewares(app)

export { app }
