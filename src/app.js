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

  messagesList.append(newMessageElement)

  message.value = ''
  messagesList.scrollTo(0, messagesList.scrollHeight)
})