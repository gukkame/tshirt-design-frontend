export function drawRectangles(store) {
    document.getElementById('canvas').width = 600;
    document.getElementById('canvas').height = 600;
  
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
  
    const layer = store.getters.getLayer;
    Object.entries(layer).forEach(([_, rect]) => {
      ctx.beginPath();
      ctx.rect(rect.position.x, rect.position.y, rect.size, rect.size);
      ctx.fillStyle = rect.color;
      ctx.fill();
    });
  }
  