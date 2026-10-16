<script setup>
const year = new Date().getFullYear()
</script>

<template>
  <footer class="site-footer">
    <div class="footer-row">
      <RouterLink to="/">sessea</RouterLink>
      <span class="dot" aria-hidden="true">·</span>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/privacy">Privacy</RouterLink>
      <RouterLink to="/contact">Contact</RouterLink>
    </div>
    <p class="footer-copy">© {{ year }} sessea · tools that stay on your machine</p>
  </footer>
</template>
