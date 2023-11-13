import Router from 'express'
import UserController from '../controllers/user.controller'

const UserRouter = Router()
const userControllerObject = new UserController()

UserRouter.get('/health', userControllerObject.getHealthStatus)

// Create new app User
UserRouter.post('/', userControllerObject.createNewUser)

// Get all app User
UserRouter.get('/', userControllerObject.getAllUsers)

// Get app User by id
UserRouter.get('/:id', userControllerObject.getUserById)

// Update app User by id
UserRouter.patch('/:id', userControllerObject.updateUserById)

// Get app User by id
UserRouter.delete('/:id', userControllerObject.deleteUserById)

export default UserRouter
