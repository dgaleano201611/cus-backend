const router = require('express').Router()
const playerConfirm = require('./playerConfirm.controller')

router.route('/').post(playerConfirm.createPlayerConfirm)
router.route('/').get(playerConfirm.getAllPlayerConfirm)

module.exports = router