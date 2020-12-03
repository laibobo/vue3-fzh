import { onUnmounted } from 'vue'
const useUniDOMCreate = (id: string) => {
  const node = document.createElement('div')
  node.id = id
  document.body.appendChild(node)
  onUnmounted(() => {
    document.body.removeChild(node)
  })
}
export default useUniDOMCreate;