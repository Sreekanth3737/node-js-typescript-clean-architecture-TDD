import { HttpResponse } from '../../protocols'
import { UnauthorizedError, ServerError } from '../../errors'

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: {
    message: error.message
  }
})

export const conflict = (error: Error): HttpResponse => ({
  statusCode: 409,
  body: {
    message: error.message
  }
})

export const forbidden = (error: Error): HttpResponse => ({
  statusCode: 403,
  body: {
    message: error.message
  }
})

export const unauthorized = (error: Error): HttpResponse => ({
  statusCode: 401,
  body: {
    message: new UnauthorizedError(error.message)
  }
})

export const serverError = (error: Error): HttpResponse => ({
  statusCode: 500,
  body: {
    message: new ServerError(error.stack as string)
  }
})

export const ok = <T>(data: T): HttpResponse => ({
  statusCode: 200,
  body: data
})

export const created = <T>(data: T): HttpResponse => ({
  statusCode: 201,
  body: data
})

export const noContent = (): HttpResponse => ({
  statusCode: 204,
  body: null
})
