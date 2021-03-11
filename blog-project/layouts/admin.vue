<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
export default {
  middleware: ['auth-init', 'auth']
}
</script>

<style>
html {
  font-family: 'Open sans', sans-serif;
}

body {
  margin: 0;
}
</style>
