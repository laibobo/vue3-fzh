import { onMounted, onUnmounted, ref, Ref } from 'vue'


const useClickOutside = (elementRef: Ref<null | HTMLElement>) => {
  const isClickOutSide = ref(false)
  function handler(event: MouseEvent) {
    isClickOutSide.value = elementRef.value != null && !elementRef.value.contains(event.target as HTMLElement)
  }
  
  onMounted(() => {
    document.addEventListener('click', handler)
  })
  onUnmounted(() => {
    document.removeEventListener('click', handler)
  })
  return isClickOutSide
}
export default useClickOutside