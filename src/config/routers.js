const router = require('../routes')

function addRoutersToApp(app) {
  app.use('/file', router)
  return app
}

module.exports = {addRoutersToApp}
