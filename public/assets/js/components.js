const getBloonDiv = content => {
  const bloonChat = document.createElement('div')
  bloonChat.classList.add('bloon')

  bloonChat.innerHTML = `${content.message} from ${content.email}`

  return bloonChat
}


export { getBloonDiv }
