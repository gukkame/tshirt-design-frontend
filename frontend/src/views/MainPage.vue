

<template>
  <div class="title">
    <h1 class="green">Tshirt design</h1>
  </div>

  <div>
    <center>
      <h1>{{ count }}</h1>
      <button @click="increment">Increment</button>
    </center>
  </div>
</template>


<script>
export default {
  components: {},
  computed: {
    count() {
      return this.$store.getters.getCount
    }
  },
  methods: {
    increment() {
      this.$store.dispatch('changeCount', 1)
    },
    reset() {
      this.$store.dispatch('reset')
    }
  }
}
</script>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.title {
  text-align: center;
}
</style>
