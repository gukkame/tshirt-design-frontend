import { createStore } from 'vuex'
const store = createStore({
  state: {
    placements: {
      Front: { width: 0, height: 0 },
      Back: { width: 0, height: 0 },
      'Left sleeve': { width: 0, height: 0 },
      'Right sleeve': { width: 0, height: 0 }
    },
    layers: {
      0: { position: { x: 160, y: 120 }, size: 180, color: '#12e353' },
      1: { position: { x: 260, y: 200 }, size: 200, color: '#e66465' },
    }
  },
  getters: {
    getCount(state) {
      return state.count
    },
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
