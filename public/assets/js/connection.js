const socket = io()
const emit = event => params => socket.emit(event, params)



export { socket, emit }