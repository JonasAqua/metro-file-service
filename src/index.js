const express = require('express')
const routersConfig = require('./config/routers')

const appName = 'File Service'
const port = process.env.PORT

console.log('--- ' + appName + ' ---')

let app = express()
app = routersConfig.addRoutersToApp(app)
app.listen(port, () => console.log(appName + ' listening on port ' + port + '!'))
