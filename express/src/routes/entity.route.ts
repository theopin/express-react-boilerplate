import Router from 'express'
import EntityController from '../controllers/entity.controller'

const router = Router()
const entityControllerObject = new EntityController()

// Get api status
router.get('/health', entityControllerObject.getHealthStatus)

// Create new app Entity
router.post('/', entityControllerObject.createNewEntity)

// Get all app Entity
router.get('/', entityControllerObject.getAllEntities)

// Get app Entity by id
router.get('/:id', entityControllerObject.getEntityById)

// Update app Entity by id
router.patch('/:id', entityControllerObject.updateEntityById)

// Get app Entity by id
router.delete('/:id', entityControllerObject.deleteEntityById)

export default router
