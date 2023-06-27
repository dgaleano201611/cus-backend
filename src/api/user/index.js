const router = require('express').Router()
const userController = require('./user.controller')

router.route('/').post(userController.createUser)
router.route('/').get(userController.getAllUser)
router.route('/:idUser').get(userController.getUserById)
router.route('/:idUser').put(userController.updateUser)
router.route('/:idUser').delete(userController.deleteUser)

module.exports = router