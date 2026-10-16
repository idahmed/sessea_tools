<script setup>
import { ref } from 'vue'
import { CONTACT_EMAIL } from '@/lib/sites'

const name = ref('')
const message = ref('')
const sentHint = ref('')

function send() {
  const subject = encodeURIComponent(
    name.value.trim() ? `sessea feedback from ${name.value.trim()}` : 'sessea feedback',
  )
  const body = encodeURIComponent(message.value.trim() || '(no message)')
  sentHint.value = 'Opening your email app…'
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
}
</script>

<template>
  <article class="prose">
    <header class="prose-head">
      <p class="eyebrow">Contact</p>
      <h1>Contact sessea tools — feedback and support</h1>
      <p class="lede">
        Prefer email?
        <a :href="`mailto:${CONTACT_EMAIL}`">{{ CONTACT_EMAIL }}</a>
      </p>
    </header>

    <form class="contact-form" @submit.prevent="send">
      <label>
        <span>Name</span>
        <input v-model="name" type="text" name="name" autocomplete="name" placeholder="Optional" >
      </label>

      <label>
        <span>Message</span>
        <textarea
          v-model="message"
          name="message"
          rows="6"
          required
          placeholder="Feedback, bug report, or question"
        />
      </label>

      <div class="form-actions">
        <button type="submit" class="cta">Open email</button>
        <p v-if="sentHint" class="form-hint">{{ sentHint }}</p>
      </div>
    </form>
  </article>
</template>
