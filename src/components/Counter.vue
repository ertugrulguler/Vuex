<template>
  <div>
    <button class="btn btn-success" @click="incrementCounter">+ Arttır</button>
    <button class="btn btn-danger" @click="decrementCounter">- Azalt</button>
  </div>
</template>

<script>
export default {
  methods : {
    incrementCounter(){
      // this.$emit("counterEvent", 1);
      this.$store.state.counter++;
      this.$store.state.clickCount++;
      this.$store.commit("updateCounter",5);
    },
    decrementCounter(){
      // this.$emit("counterEvent", -1);
      this.$store.state.counter--;
      this.$store.state.clickCount++;
      this.$store.commit("updateCounter",-5);
    }
  }
}
</script>

<style>
</style>
