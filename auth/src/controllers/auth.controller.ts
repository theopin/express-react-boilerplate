import { type Request, type Response, type NextFunction } from 'express'
import { StatusCode } from 'status-code-enum'
import { JsonWebTokenError } from 'jsonwebtoken'

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
    const database = req.app.get('database')

    authServiceObject
      .getEntityByUsername(database, body.username)
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

        res.status(StatusCode.SuccessAccepted).json({
          status: true,
          data: result
        })
      })
      .catch((errorObject: any) => {
        const errorResponse = JSON.parse(serverErrorResponse)

        if (errorObject.message === 'BadUsernameError' || errorObject.message === 'InvalidCredentialsError') {
          errorResponse.statusCode = StatusCode.ClientErrorBadRequest
        }

        res.status(errorResponse.statusCode).json(errorResponse.response)
        next(errorObject)
      })
  }

  obtainAccessToken (req: Request, res: Response, next: NextFunction): void {
    if (req.headers.authorization === null || req.headers.authorization === undefined) {
      throw new JsonWebTokenError('undefined token')
    }
    try {
      const refreshToken = req.headers.authorization.split(' ')[1]
      const jwtTokenObject: any = authServiceObject.validateJwtToken(refreshToken, JwtConstants.refresh.secret)

      if (jwtTokenObject === null || jwtTokenObject === undefined) {
        throw new JsonWebTokenError('undefined token data')
      }

      const result = {
        accessToken: authServiceObject.createJwtToken({ username: jwtTokenObject.username }, JwtConstants.access.secret, JwtConstants.access.expiresIn)
      }

      res.status(StatusCode.SuccessOK).json({
        status: true,
        data: result
      })
    } catch (errorObject: any) {
      const errorResponse = JSON.parse(serverErrorResponse)

      console.log('error', req.headers.authorization.split(' ')[1], errorObject.name, JwtConstants.refresh.expiresIn, 10101010, errorObject.message)

      if (errorObject.name === 'TokenExpiredError' || errorObject.name === 'InvalidTokenError' || errorObject.name === 'JsonWebTokenError') {
        errorResponse.statusCode = StatusCode.ClientErrorBadRequest
      }

      res.status(errorResponse.statusCode).json(errorResponse.response)
      next(errorObject)
    }
  }

  verifyAccessToken (req: Request, res: Response, next: NextFunction): void {
    if (req.headers.authorization === null || req.headers.authorization === undefined) {
      throw new JsonWebTokenError('undefined token')
    }
    try {
      const accessToken = req.headers.authorization.split(' ')[1]
      const jwtTokenObject: any = authServiceObject.validateJwtToken(accessToken, JwtConstants.accessToken.secret)

      if (jwtTokenObject === null || jwtTokenObject === undefined) {
        throw new JsonWebTokenError('undefined token data')
      }

      res.status(StatusCode.SuccessOK).json({
        status: true
      })
    } catch (errorObject: any) {
      const errorResponse = JSON.parse(serverErrorResponse)

      console.log('error', req.headers.authorization.split(' ')[1], errorObject.name, JwtConstants.refresh.expiresIn, 10101010, errorObject.message)

      if (errorObject.name === 'TokenExpiredError' || errorObject.name === 'InvalidTokenError' || errorObject.name === 'JsonWebTokenError') {
        errorResponse.statusCode = StatusCode.ClientErrorBadRequest
      }

      res.status(errorResponse.statusCode).json(errorResponse.response)
      next(errorObject)
    }
  }
}

export default AuthController
