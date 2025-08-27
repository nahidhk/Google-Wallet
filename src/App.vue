<template>
  <div>
    <Nav /> <!-- Nav component use করা হলো -->
    <h1>Main App Content</h1>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'  // Import করা হলো

export default {
  name: 'App',
  components: {
    Nav  // Declare করা হলো
  }
}
</script>

<style>
/* Optional global styles */
</style>



