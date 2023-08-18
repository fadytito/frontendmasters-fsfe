const http = require('http')
const fs = require('fs')
const PORT = 8000


const server = http.createServer((req, res) => {
	res.writeHead(200, {'content-type': 'text/html'})
	res.write('Helloooo')
	res.end()
})
console.log('app server is running on port 8080')
server.listen(PORT)
