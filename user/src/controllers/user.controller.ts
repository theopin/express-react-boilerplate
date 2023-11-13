import { type Request, type Response, type NextFunction } from 'express'
import { StatusCode } from 'status-code-enum'
import UserService from '../services/user.service'

const userServiceObject = new UserService()

const serverErrorResponse = JSON.stringify({
  statusCode: StatusCode.ServerErrorInternal,
  response: {
    status: false,
    message: 'Error in request fulfilment!'
  }
})

class UserController {
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

  createNewUser (req: Request, res: Response, next: NextFunction): void {
    const body = req.body
    const database = req.app.get('database')

    userServiceObject
      .createNewUser(database, body)
      .then((createResult) => {
        res.status(StatusCode.SuccessCreated).json({
          status: true,
          data: createResult
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

  getUserById (req: Request, res: Response, next: NextFunction): void {
    const { id } = req.params
    const database = req.app.get('database')

    userServiceObject
      .getUserById(database, id)
      .then((getResult) => {
        res.status(StatusCode.SuccessOK).json({
          status: true,
          data: getResult
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

  getAllUsers (req: Request, res: Response, next: NextFunction): void {
    const { params } = req.params
    const database = req.app.get('database')

    userServiceObject
      .getAllUsers(database, params)
      .then((getAllResult) => {
        res.status(StatusCode.SuccessOK).json({
          status: true,
          data: getAllResult
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

  updateUserById (req: Request, res: Response, next: NextFunction): void {
    const newData = req.body
    const { id } = req.params
    const database = req.app.get('database')

    userServiceObject
      .updateUserById(database, id, newData)
      .then((updateResult) => {
        res.status(StatusCode.SuccessOK).json({
          status: true,
          data: updateResult
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

  deleteUserById (req: Request, res: Response, next: NextFunction): void {
    const { id } = req.params
    const database = req.app.get('database')

    userServiceObject
      .deleteUserById(database, id)
      .then((deleteResult) => {
        res.status(StatusCode.SuccessOK).json({
          status: true,
          data: deleteResult
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

export default UserController
