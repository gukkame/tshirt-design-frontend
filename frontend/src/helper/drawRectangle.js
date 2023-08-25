export function drawRectangles(store) {
  document.getElementById('canvas').width = 600
  document.getElementById('canvas').height = 600

  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext('2d')

  const layer = store.getters.getLayer
  Object.entries(layer).forEach(([_, rect]) => {
    ctx.beginPath()
    ctx.rect(rect.position.x, rect.position.y, rect.size, rect.size)
    ctx.fillStyle = rect.color
    ctx.fill()
  })
}
export function drawDesignPlacementFront(store, allCanvas) {
  const layer = store.getters.getLayer
  const placement = store.getters.getPlacement

  Object.entries(allCanvas).forEach(([i, canvas]) => {
    const ctx = canvas.getContext('2d')
    canvas.width = 280
    canvas.height = 280

    ctx.beginPath()
    ctx.rect(1, 1, placement[canvas.id].width, placement[canvas.id].height)
    ctx.lineWidth = 2
    ctx.strokeStyle = '#12e353'
    ctx.stroke()

    calculateFrontPlacement(layer, placement[canvas.id], ctx)
  })
}
export function calculateFrontPlacement(layers, placement, ctx) {

  for (const layerKey in layers) {
    if (layers.hasOwnProperty(layerKey)) {
      const layer = layers[layerKey]
      var shortestSide
      var designXpoint
      var designYpoint

      if (placement.width < placement.height) {
        shortestSide = placement.width

        designYpoint = placement.height / 2 - shortestSide / 2
        designXpoint = 0
      } else {
        shortestSide = placement.height

        designXpoint = placement.width / 2 - shortestSide / 2
        designYpoint = 0
      }

      var designWidth = placement.width - designXpoint * 2

      var layerXPoint = (designWidth * layer.position.x) / 600 + designXpoint
      var layerYPoint = (designWidth * layer.position.y) / 600 + designYpoint

      var layerWidth = (layer.size * designWidth) / 600

      ctx.beginPath()
      ctx.rect(layerXPoint, layerYPoint, layerWidth, layerWidth)
      ctx.lineWidth = 2
      ctx.fillStyle = layer.color
      ctx.fill()

      // ctx.beginPath()
      // ctx.rect(designXpoint, designYpoint, designWidth, designWidth)
      // ctx.lineWidth = 2
      // ctx.strokeStyle = '#f248'
      // ctx.stroke()
    }
  }
}
