<template>
  <div>
    <p class="counter-container"> Sayaç : {{ double }}</p>
    <p class="counter-container"> Tıklanma Sayacı : {{ click }}</p>
  </div>
</template>
<script>
import {mapGetters} from 'vuex';
  export default {
    // props : ["counter"]
    // computed:{
    //   counter(){
    //     return this.$store.getters.getDoubleCounter;
    //   }
    // }
    computed:{
        ...mapGetters({
        double:"getDoubleCounter",
        click:"clickCounter"
      }),
      customProp(){
          
      }
    }
  }

</script>
<style scoped>
  .counter-container{
    border: 1px solid #aa7f08;
    padding: 10px 5px;
    background-color: #fbbd08;
    font-size: 20px;
    color: #000;
  }
</style>
