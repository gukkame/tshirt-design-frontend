<script setup>
import '../assets/main.css'
import LayerDataInput from '@/components/LayerDataInput.vue'
import DimensionInput from '@/components/DimensionInput.vue'
</script>
<template>
  <div class="title">
    <h1>Design positioning on Canvas</h1>
  </div>

  <section class="design-section">
    <div>
      <h1>Design</h1>
      <h4>Choose 2 rectangles to add to design</h4>
      <h4>Both rectangles must be fully visible, to properly see design placement on each canvas!</h4>
      <br />
      <h2>Rectangle 1</h2>
      <LayerDataInput :elementId="0" />
      <br />
      <br />
      <h2>Rectangle 2</h2>
      <LayerDataInput :elementId="1" />
    </div>
    <canvas class="canvas" id="design-canvas"></canvas>
  </section>

  <section>
    <h1>Placement</h1>
    <p>Green border indicates design placement dimension</p>
    <container class="placement">
      <div>
        <canvas class="canvas-placement" id="Front"></canvas>
        <DimensionInput side="Front" />
      </div>
      <div>
        <canvas class="canvas-placement" id="Back"></canvas>
        <DimensionInput side="Back" />
      </div>
      <div>
        <canvas class="canvas-placement" id="Left Sleeve"></canvas>
        <DimensionInput side="Left Sleeve" />
      </div>
      <div>
        <canvas class="canvas-placement" id="Right Sleeve"></canvas>
        <DimensionInput side="Right Sleeve" />
      </div>
    </container>
  </section>
</template>

<script>
import { drawRectangles, drawDesignAtPlacements } from '../helper/drawRectangle'

export default {
  data() {
    return {
      layers: this.$store.state.layers,
      placements: this.$store.state.placements
    }
  },
  watch: {
    layers: {
      handler(newLayers) {
        this.drawRectangles(newLayers)
      },
      deep: true
    },
    placements: {
      handler(newLayers) {
        this.drawRectangles(newLayers)
      },
      deep: true
    }
  },
  mounted() {
    this.drawRectangles()
  },
  methods: {
    drawRectangles() {
      drawRectangles(this.$store)

      const canvasElements = document.querySelectorAll('canvas')
      const filteredCanvasElements = Array.from(canvasElements).filter(
        (canvas) => canvas.id !== 'design-canvas'
      )

      drawDesignAtPlacements(this.$store, filteredCanvasElements)
    }
  }
}
</script>
