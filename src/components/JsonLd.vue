<script setup>
import { onMounted, onUnmounted, watch } from 'vue'

const props = defineProps({
  data: {
    type: [Object, Array],
    required: true,
  },
})

let el = null

function sync() {
  if (el) {
    el.remove()
    el = null
  }
  el = document.createElement('script')
  el.type = 'application/ld+json'
  el.textContent = JSON.stringify(props.data)
  document.head.appendChild(el)
}

onMounted(sync)
watch(() => props.data, sync, { deep: true })
onUnmounted(() => {
  if (el) el.remove()
})
</script>

<template>
  <span class="sr-only" hidden />
</template>
