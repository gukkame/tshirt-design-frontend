
<script setup>
import '../assets/main.css'
import LayerDataInput from '../components/LayerDataInput.vue'
import DimensionInput from '../components/dimensionInput.vue'

</script>
<template>
  <div class="title">
    <h1>Tshirt design</h1>
  </div>

  <section class="design-section">
    <div>
      <h1>Design</h1>
      <h4>Choose 2 rectangle to add to design</h4>
      <br>
      <h2>Rectangle 1</h2>
      <LayerDataInput :elementId=0 />
      <br>
      <br>
      <h2>Rectangle 2</h2>
      <LayerDataInput :elementId=1 />
    </div>
    <canvas class="canvas" id="canvas"></canvas>
  </section>

  <section>
    <h1>Placement</h1>
    <container class="placement">
      <div>
        <canvas class="canvas-placement" id="canvas-front"></canvas>
        <DimensionInput side="frontSide" />
      </div>
      <div>
        <canvas class="canvas-placement" id="canvas-back"></canvas>
        <DimensionInput side="backSide" />
      </div>
      <div>
        <canvas class="canvas-placement" id="canvas-right"></canvas>
        <DimensionInput side="rightSleeve" />
      </div>
      <div>
        <canvas class="canvas-placement" id="canvas-left"></canvas>
        <DimensionInput side="leftSleeve" />
      </div>

    </container>

  </section>
</template>


<script>
import { drawRectangles } from '../helper/drawRectangle';

export default {
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
      drawRectangles(this.$store);
    },
  }
}
</script>
