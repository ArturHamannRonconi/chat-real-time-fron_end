import { socket, emit } from './connection.js'
import { getBloonDiv } from './components.js'

const buttonSend = document.querySelector('.buttonSend')

buttonSend.addEventListener('click', () => {
  const message = document.querySelector('#message-form').value
  const email = document.querySelector('#email-form').value
  
  const sendMessage = emit('sendMessage')

  sendMessage({ email, message })
})

socket.on('receiveMessage', user => {
  const { email, message } = user 
  
  const chat = document.querySelector('.chat')
  const chatBloon = getBloonDiv({ email, message }) 

  chat.appendChild(chatBloon)
})

