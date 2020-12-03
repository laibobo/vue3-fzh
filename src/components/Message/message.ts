import Message from './index.vue'
import { createApp } from 'vue'
type MessageType = 'success' | 'danger' | 'warning' | 'default'

export default (message: string, type?: MessageType, timeout = 1500) => {
  const messageInstance = createApp(Message,{ message, type })

  const mountNode = document.createElement('div')
  document.body.appendChild(mountNode)  
  messageInstance.mount(mountNode)
  
  setTimeout(() => {
    messageInstance.unmount(mountNode)
    document.body.removeChild(mountNode)    
  }, timeout)
}
