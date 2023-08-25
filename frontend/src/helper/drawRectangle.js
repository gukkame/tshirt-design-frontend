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

    console.log(canvas.id)
    console.log(i)
    ctx.beginPath()
    ctx.rect(1, 1, placement[canvas.id].width, placement[canvas.id].height)
    ctx.lineWidth = 2
    ctx.strokeStyle = '#12e353'
    ctx.stroke()
  })

  //todo draw dimention border, then calculate where design should be located
}
export function calculateFrontPlacement() {}
