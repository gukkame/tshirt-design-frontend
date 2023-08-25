
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
      <h2>Rectangle 1</h2>
      <DimensionInput :elementId=0 />
      <br>
      <br>
      <h2>Rectangle 2</h2>
      <DimensionInput :elementId=1 />
    </div>
    <canvas class="canvas" id="canvas"></canvas>
  </section>
</template>


<script>
export default {
  components: {},
  data() {
    return {
      layers: this.$store.state.layers
    };
  },
  watch: {
    layers: {
      handler(newLayers) {
        this.drawRectangles(newLayers);
      },
      deep: true
    },
  },
  mounted() {
    this.drawRectangles();
  },
  methods: {
    drawRectangles() {
      document.getElementById('canvas').width = 600;
      document.getElementById('canvas').height = 600;

      const canvas = document.getElementById('canvas');
      const ctx = canvas.getContext('2d');

      const layer = this.$store.getters.getLayer;
      Object.entries(layer).forEach(([_, rect]) => {
        ctx.beginPath();
        ctx.rect(rect.position.x, rect.position.y, rect.size, rect.size);
        ctx.fillStyle = rect.color;
        ctx.fill();
      });

    },
  }
}
</script>
