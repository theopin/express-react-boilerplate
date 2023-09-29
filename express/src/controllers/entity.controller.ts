import { type Request, type Response, type NextFunction } from 'express'
import { StatusCode } from 'status-code-enum'
import EntityService from '../services/entity.service'

const entityServiceObject = new EntityService()

const serverErrorResponse = JSON.stringify({
  statusCode: StatusCode.ServerErrorInternal,
  response: {
    status: false,
    message: 'Error in request fulfilment!'
  }
})

class EntityController {
  getHealthStatus (_req: Request, res: Response, next: NextFunction): void {
    try {
      res.status(StatusCode.SuccessOK).json({
        status: 'true',
        data: {
          message: 'operational',
          name: 'health'
        }
      })
    } catch (errorObject: any) {
      const errorResponse = JSON.parse(serverErrorResponse)
      res.status(500).json({
        msg: 'Internal server error, contact API administrator'
      })
      res.status(errorResponse.statusCode).json(errorResponse.response)
      next(errorObject)
    }
  }

  createNewEntity (req: Request, res: Response, next: NextFunction): void {
    const { username } = req.params
    entityServiceObject
      .createNewEntity(username)
      .then((createResult) => {
        res.status(StatusCode.SuccessOK).json({
          status: true,
          data: {
            createResult
          }
        })
      })
      .catch((errorObject: any) => {
        const errorResponse = JSON.parse(serverErrorResponse)

        if (errorObject.message === 'BadUsernameError') {
          errorResponse.statusCode = StatusCode.ClientErrorBadRequest
        }

        res.status(errorResponse.statusCode).json(errorResponse.response)
        next(errorObject)
      })
  }

  getEntityById (req: Request, res: Response, next: NextFunction): void {
    const { username } = req.params
    entityServiceObject
      .getEntityById(username)
      .then((createResult) => {
        res.status(StatusCode.SuccessOK).json({
          status: true,
          data: {
            createResult
          }
        })
      })
      .catch((errorObject: any) => {
        const errorResponse = JSON.parse(serverErrorResponse)

        if (errorObject.message === 'BadUsernameError') {
          errorResponse.statusCode = StatusCode.ClientErrorBadRequest
        }

        res.status(errorResponse.statusCode).json(errorResponse.response)
        next(errorObject)
      })
  }

  getAllEntities (req: Request, res: Response, next: NextFunction): void {
    const { username } = req.params
    entityServiceObject
      .getAllEntities(username)
      .then((createResult) => {
        res.status(StatusCode.SuccessOK).json({
          status: true,
          data: {
            createResult
          }
        })
      })
      .catch((errorObject: any) => {
        const errorResponse = JSON.parse(serverErrorResponse)

        if (errorObject.message === 'BadUsernameError') {
          errorResponse.statusCode = StatusCode.ClientErrorBadRequest
        }

        res.status(errorResponse.statusCode).json(errorResponse.response)
        next(errorObject)
      })
  }

  updateEntityById (req: Request, res: Response, next: NextFunction): void {
    const { username, newData } = req.params
    entityServiceObject
      .updateEntityById(username, newData)
      .then((createResult) => {
        res.status(StatusCode.SuccessOK).json({
          status: true,
          data: {
            createResult
          }
        })
      })
      .catch((errorObject: any) => {
        const errorResponse = JSON.parse(serverErrorResponse)

        if (errorObject.message === 'BadUsernameError') {
          errorResponse.statusCode = StatusCode.ClientErrorBadRequest
        }

        res.status(errorResponse.statusCode).json(errorResponse.response)
        next(errorObject)
      })
  }

  deleteEntityById (req: Request, res: Response, next: NextFunction): void {
    const { username } = req.params
    entityServiceObject
      .deleteEntityById(username)
      .then((createResult) => {
        res.status(StatusCode.SuccessOK).json({
          status: true,
          data: {
            createResult
          }
        })
      })
      .catch((errorObject: any) => {
        const errorResponse = JSON.parse(serverErrorResponse)

        if (errorObject.message === 'BadUsernameError') {
          errorResponse.statusCode = StatusCode.ClientErrorBadRequest
        }

        res.status(errorResponse.statusCode).json(errorResponse.response)
        next(errorObject)
      })
  }
}

export default EntityController
