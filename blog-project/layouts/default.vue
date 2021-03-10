<template>
  <div>
    <the-header @sidenavToggle="displaySideNav = !displaySideNav"/>
    <the-sidenav
      :show="displaySideNav"
      @close="displaySideNav = false"
    />
    <Nuxt />
  </div>
</template>

<script>
import TheHeader from '@/components/navigation/TheHeader';
import TheSidenav from '@/components/navigation/TheSidenav';

export default {
  // middleware: 'log',
  components: {
    TheHeader,
    TheSidenav
  },
  data() {
    return {
      displaySideNav: false
    };
  }
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
