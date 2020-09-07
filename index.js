const https = require('https')
const fs = require('fs')
const express = require('express')
const forceHttps = require('express-force-https')
const app = express()

app.use(forceHttps)



app.use('/', express.static(__dirname+'/static'))
if(process.env.NODE_ENV == "development") {
    https.createServer( {
	key: fs.readFileSync(__dirname+'/key.pem'),
	cert:fs.readFileSync(__dirname+'/cert.pem'),
	passphrase: 'asdf'
    },app).listen(process.env.PORT || 5000)
} else {
    app.listen(process.env.PORT || 5000)
}
