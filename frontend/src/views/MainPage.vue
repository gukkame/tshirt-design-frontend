
<script setup>
import '../assets/main.css'
import DimensionInput from '../components/dimensionInput.vue'

</script>
<template>
  <div class="title">
    <h1>Tshirt design</h1>
  </div>

  <section class="design">
    <div>
      <h1>Design</h1>
      <h4>Choose 2 rectangle to add to design</h4>
      <br>
      <h3>Rectangle 1</h3>
      <DimensionInput :elementId=0 />
      <br>
      <h3>Rectangle 2</h3>
      <DimensionInput :elementId=1 />
    </div>

    <canvas ref="canvas" :width="200" :height="300" />
  </section>
</template>


<script>
export default {
  components: {},
  computed: {
    
  },
  methods: {
    
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
