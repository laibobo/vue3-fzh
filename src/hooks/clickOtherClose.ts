import { onMounted,onUnmounted } from 'vue'

function otherClose(event) {
  // event.tage
}
function clickOtherClose() {
  onMounted(() => {
    document.addEventListener('click', otherClose)
  })
  onUnmounted(() => {
    document.removeEventListener('click', otherClose)
  })
}
export default clickOtherClose