module.exports = function Routes(app,server){
  var io = require('socket.io').listen(server)
  app.get('/', function(req,res){
    res.render('index')
  })
  io.sockets.on('connection', function(socket){
    console.log("connection")
    socket.on("info submitted",function(data){
      console.log(data)
      var randomNum = Math.floor((Math.random() * 1000)+1);
      socket.emit('serverResponse', {data})
      socket.emit('randomNum', {response: randomNum})
    })
  })
}
