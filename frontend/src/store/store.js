import { createStore } from 'vuex'
const store = createStore({
  state: {
    placements: {
      'Front': { width: 0, height: 0 },
      'Back': { width: 0, height: 0 },
      'Left sleeve': { width: 0, height: 0 },
      'Right sleeve': { width: 0, height: 0 }
    },
    layers: {
      0: { position: { x: 0, y: 0 }, size: 0, color: '#000000' },
      1: { position: { x: 0, y: 0 }, size: 0, color: '#000000' }
    }
  },
  getters: {
    getCount(state) {
      return state.count
    },
    getPlacement(state){
      return state.placements
    },
    getLayers(state){
      return state.layers
    }
  },
  actions: {
  },
  mutations: {
    setPlacementDimension(state, { name, width, height }) {
      state.placements[name].width = width
      state.placements[name].height = height
    },
    setLayerData(state, { id, position, size, color }) {
      state.layers[id].size = size
      state.layers[id].position= position
      state.layers[id].color = color
    },

  }
})
export default store
