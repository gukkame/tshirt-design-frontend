import { createStore } from 'vuex'
const store = createStore({
  state: {
    placements: {
      Front: { width: 260, height: 170, centre: { x: 80, y: 60 } },
      Back: { width: 200, height: 290, centre: { x: 80, y: 60 } },
      'Left Sleeve': { width: 250, height: 130, centre: { x: 80, y: 60 } },
      'Right Sleeve': { width: 250, height: 130, centre: { x: 80, y: 60 } }
    },
    layers: {
      0: { position: { x: 60, y: 120 }, centre: { x: 80, y: 60 }, size: 120, color: '#12e353' },
      1: { position: { x: 260, y: 200 }, centre: { x: 130, y: 100 }, size: 200, color: '#e66465' }
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
    setLayerData(state, { id, position, centre, size, color }) {
      state.layers[id].size = size
      state.layers[id].position = position
      state.layers[id].color = color
      state.layers[id].centre = centre
    }
  }
})
export default store
