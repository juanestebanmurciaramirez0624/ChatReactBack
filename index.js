const http = require('http')
const server = http.createServer()
const io = require('socket.io')(server, {
  cors: {
    origin: '*',
  }
})

io.on('connection', (socket) => {
  console.log('Cliente Conectado')
  socket.on('chat_message', (data) => {
    console.log(data)
    io.emit('chat_message', data)
  })
})

server.listen(3001, () => {
  console.log('Servidor Socket.IO en http://localhost:3001')
})
