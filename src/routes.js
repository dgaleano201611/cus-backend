const healthcheck = require('./api/healthcheck')
const user = require('./api/user')
const playerConfirm = require('./api/playerConfirm')

const routes = (app) => {
  app.use('/api/healthcheck', healthcheck)
  app.use('/api/user', user)
  app.use('/api/player-confirm', playerConfirm)

}

module.exports = routes