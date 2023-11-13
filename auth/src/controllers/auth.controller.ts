import { type Request, type Response, type NextFunction } from 'express'
import { StatusCode } from 'status-code-enum'
import AuthService from '../services/auth.service'
import { JwtConstants } from '../constants/jwt.constants'

const authServiceObject = new AuthService()

const serverErrorResponse = JSON.stringify({
  statusCode: StatusCode.ServerErrorInternal,
  response: {
    status: false,
    message: 'Error in request fulfilment!'
  }
})

class AuthController {
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

  authenticateUser (req: Request, res: Response, next: NextFunction): void {
    const body = req.body
    const { id } = req.params
    const database = req.app.get('database')

    authServiceObject
      .getEntityById(database, id)
      .then(async (getResult: { password: any } | null | undefined) => {
        if (getResult === null || getResult === undefined) {
          throw new Error('BadUsernameError')
        }

        const validateResult: boolean = await authServiceObject.validatePassword(body.password, getResult.password)

        if (!validateResult) {
          throw new Error('InvalidCredentialsError')
        }

        const result = {
          refreshToken: authServiceObject.createJwtToken(body, JwtConstants.refresh.secret, JwtConstants.refresh.expiresIn),
          accessToken: authServiceObject.createJwtToken(body, JwtConstants.access.secret, JwtConstants.access.expiresIn)
        }

        res.status(StatusCode.SuccessOK).json({
          status: true,
          data: result
        })
      })
      .catch((errorObject: any) => {
        const errorResponse = JSON.parse(serverErrorResponse)

        if (errorObject.message === 'BadUsernameError' || errorObject.message === 'InvalidCredentialsError') {
          errorResponse.statusCode = StatusCode.ClientErrorBadRequest
        }

        res.status(errorResponse.statusCodentityServiceObjecte).json(errorResponse.response)
        next(errorObject)
      })
  }

  obtainAccessToken (req: Request, res: Response, next: NextFunction): void {
    const body = req.body // replace with auth

    try {
      const abc: string = authServiceObject.validateJwtToken(body.token, JwtConstants.refresh.secret)

      if (abc === null || abc === undefined) {
        throw new Error('InvalidToken')
      }

      const result = {
        refreshToken: authServiceObject.createJwtToken(body, JwtConstants.refresh.secret, JwtConstants.refresh.expiresIn),
        accessToken: authServiceObject.createJwtToken(body, JwtConstants.access.secret, JwtConstants.access.expiresIn)
      }

      res.status(StatusCode.SuccessOK).json({
        status: true,
        data: result
      })
    } catch (errorObject: any) {
      const errorResponse = JSON.parse(serverErrorResponse)

      if (errorObject.message === 'BadUsernameError' || errorObject.message === 'InvalidCredentialsError') {
        errorResponse.statusCode = StatusCode.ClientErrorBadRequest
      }

      res.status(errorResponse.statusCodentityServiceObjecte).json(errorResponse.response)
      next(errorObject)
    }
  }
}

export default AuthController
