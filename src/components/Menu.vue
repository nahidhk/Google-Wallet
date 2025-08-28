<template>
  <br><br><br>
  <div class="container">
    <div 
      class="btnbox" 
      v-for="(item, index) in btnloop" 
      :key="index"
      @click="goTo(item.route)"
    >
      <img class="icon" :src="item.icon">
      <span>{{ item.label }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data() {
    return {
      btnloop:[
        { icon:'./src/assets/svg/credit.png', label: 'Credit', route:'/credit' },
        { icon:'./src/assets/svg/history.png', label: 'History', route:'/history' },
        { icon:'./src/assets/svg/datetodate.png', label: 'Monthly', route:'/monthly' },
        { icon:'./src/assets/svg/sheet.png', label: 'G-Sheet', route:'/gsheet' }
      ]
    }
  },
  methods: {
    goTo(route) {
      this.$router.push(route)   // নতুন পেজ ওপেন হবে
    }
  }
}
</script>
