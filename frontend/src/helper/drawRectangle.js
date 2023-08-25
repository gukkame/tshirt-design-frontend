//Draws Design Rectangles
export function drawRectangles(store) {
  document.getElementById('design-canvas').width = 600
  document.getElementById('design-canvas').height = 600

  const canvas = document.getElementById('design-canvas')
  const ctx = canvas.getContext('2d')

  const layer = store.getters.getLayer
  Object.entries(layer).forEach(([_, rect]) => {
    ctx.beginPath()
    ctx.rect(rect.position.x, rect.position.y, rect.size, rect.size)
    ctx.fillStyle = rect.color
    ctx.fill()
  })
}

// Draws design on different placements based on dimentions
export function drawDesignAtPlacements(store, allCanvas) {
  const layer = store.getters.getLayer
  const placement = store.getters.getPlacement

  //loops over each placement canvas
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
  // Loops over each layer (rectangle)
  for (const layerKey in layers) {
    if (layers.hasOwnProperty(layerKey)) {
      const layer = layers[layerKey]

      var designXpoint
      var designYpoint

      // Checks the shortest side
      if (placement.width < placement.height) {
        var shortestSide = placement.width

        designYpoint = placement.height / 2 - shortestSide / 2
        designXpoint = 0
      } else {
        var shortestSide = placement.height

        designXpoint = placement.width / 2 - shortestSide / 2
        designYpoint = 0
      }

      // Gets designWidth
      var designWidth = placement.width - designXpoint * 2

      // Calculates layer upper corner X,Y coordinates
      var layerXPoint = (designWidth * layer.position.x) / 600 + designXpoint
      var layerYPoint = (designWidth * layer.position.y) / 600 + designYpoint

      var layerWidth = (layer.size * designWidth) / 600

      if (
        layerXPoint + layerWidth > placement.width ||
        layerYPoint + layerWidth > placement.height
      ) {
        console.log('Rectangle outside of frame!')
      } else {
        //Draws layer on placement canva
        ctx.beginPath()
        ctx.rect(layerXPoint, layerYPoint, layerWidth, layerWidth)
        ctx.lineWidth = 2
        ctx.fillStyle = layer.color
        ctx.fill()
      }

      // ctx.beginPath()
      // ctx.rect(designXpoint, designYpoint, designWidth, designWidth)
      // ctx.lineWidth = 2
      // ctx.strokeStyle = '#f248'
      // ctx.stroke()
    }
  }
}
