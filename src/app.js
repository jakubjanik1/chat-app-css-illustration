const addMessageForm = document.querySelector('form.add-message')
const messagesList = document.querySelector('.messages')

addMessageForm.addEventListener('submit', e => {
  e.preventDefault()

  let message = e.target.elements.message

  if (!message.value.trim()) {
    return
  }

  const newMessageElement = document.createElement('div')
  newMessageElement.classList.add('message', 'message-left')
  newMessageElement.textContent = message.value
  setTimeout(() => newMessageElement.style.transform = 'translateX(0)')

  messagesList.append(newMessageElement)

  message.value = ''
  messagesList.scrollTo(0, messagesList.scrollHeight)
})

const messages = [...document.querySelectorAll('.message')]
const id = setInterval(() => {
  if (messages.length === 0) {
    addMessageForm.elements[0].disabled = false
    addMessageForm.elements[1].disabled = false
    return clearInterval(id)
  }

  messages.shift().style.transform = 'translateX(0)'
}, 800)