import Router from 'express'
import AuthController from '../controllers/auth.controller'

const AuthRouter = Router()
const authControllerObject = new AuthController()

AuthRouter.get('/health', authControllerObject.getHealthStatus)

// Authenticate with given credentials
AuthRouter.post('/login', authControllerObject.authenticateUser)

// Get access token using existing refresh token
AuthRouter.get('/access', authControllerObject.obtainAccessToken)

export default AuthRouter
