module.exports = (router, io) =>{
  io.on('connection', (socket)=>{
    console.log('new user! : ', socket.id)
    socket.on('join room', room => {
      console.log('join')
      socket.join(room);
    })
    socket.on('leave room', room => {
      socket.leave(room); 
    })
    socket.on('send message', (name, index, room)=>{
      var returnMsg = {
        "name" : name,
        "index" : index
      }
      console.log(returnMsg)
      io.to(room).emit('receive message', returnMsg);
    })
    socket.on('disconnect', ()=>{ console.log('user disconnect')})
  })
  return router;
}
