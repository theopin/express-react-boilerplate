import Router from 'express'
import AuthController from '../controllers/auth.controller'

const AuthRouter = Router()
const authControllerObject = new AuthController()

AuthRouter.get('/health', authControllerObject.getHealthStatus)

// Authenticate with given credentials
AuthRouter.post('/login', authControllerObject.authenticateUser)

// Get access token using existing refresh token
AuthRouter.get('/access', authControllerObject.obtainAccessToken)

// Verify validity of existing access token
AuthRouter.get('/verify', authControllerObject.obtainAccessToken)

export default AuthRouter
