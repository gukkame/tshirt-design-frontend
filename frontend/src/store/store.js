import { createStore } from 'vuex'
const store = createStore({
  state: {
    placements: {
      'Front': { width: 40, height: 40 },
      'Back': { width: 20, height: 30 },
      'Left Sleeve': { width: 40, height: 20 },
      'Right Sleeve': { width: 30, height: 10 },
    },
    layers: {
      0: { position: { x: 160, y: 120 }, size: 180, color: '#12e353' },
      1: { position: { x: 260, y: 200 }, size: 200, color: '#e66465' }
    }
  },
  getters: {
    getPlacement(state) {
      return state.placements
    },
    getLayer(state) {
      return state.layers
    }
  },
  actions: {},
  mutations: {
    setPlacementDimension(state, { name, width, height }) {
      state.placements[name].width = width
      state.placements[name].height = height
    },
    setLayerData(state, { id, position, size, color }) {
      state.layers[id].size = size
      state.layers[id].position = position
      state.layers[id].color = color
    }
  }
})
export default store
