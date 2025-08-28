<template>
  <div class="nav flex around">

    <div>
      <h3 class="mrgin5px fff">
        {{ logo }}
      </h3>
    </div>
    <div>
      <div class="blanceBox">
        <i class="fa-solid fa-bangladeshi-taka-sign"></i> 
        <span id="taka">
          500.00
          <i class="fa-solid fa-arrow-rotate-right fa-spin"></i>
        </span>
        TK
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  data(){
    return{
      logo:'Google Wallet'
    }
  }
}
</script>
