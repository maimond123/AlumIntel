"'use client'"

import { useEffect, useRef } from "'react'"

export default function NetworkVisualization() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("'2d'")
    if (!ctx) return

    // Set canvas size
    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }
    resize()
    window.addEventListener("'resize'", resize)

    // Node class
    class Node {
      x: number
      y: number
      vx: number
      vy: number

      constructor(x: number, y: number) {
        this.x = x
        this.y = y
        this.vx = (Math.random() - 0.5) * 0.5
        this.vy = (Math.random() - 0.5) * 0.5
      }

      update(width: number, height: number) {
        this.x += this.vx
        this.y += this.vy

        if (this.x < 0 || this.x > width) this.vx *= -1
        if (this.y < 0 || this.y > height) this.vy *= -1
      }
    }

    // Create nodes
    const nodes: Node[] = Array.from({ length: 50 }, () => 
      new Node(
        Math.random() * canvas.offsetWidth,
        Math.random() * canvas.offsetHeight
      )
    )

    // Animation
    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)
      
      // Update and draw nodes
      nodes.forEach(node => {
        node.update(canvas.offsetWidth, canvas.offsetHeight)
      })

      // Draw connections
      ctx.strokeStyle = "'rgba(64, 224, 208, 0.2)'" // Slightly brighter teal color
      ctx.lineWidth = 1.5 // Increased from 0.5 to 1.5
      
      nodes.forEach((nodeA, i) => {
        nodes.slice(i + 1).forEach(nodeB => {
          const dx = nodeA.x - nodeB.x
          const dy = nodeA.y - nodeB.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < 100) {
            ctx.beginPath()
            ctx.moveTo(nodeA.x, nodeA.y)
            ctx.lineTo(nodeB.x, nodeB.y)
            ctx.stroke()
          }
        })
      })

      // Draw nodes
      nodes.forEach(node => {
        ctx.beginPath()
        ctx.arc(node.x, node.y, 3, 0, Math.PI * 2) // Increased size from 2 to 3
        ctx.fillStyle = "'rgba(255, 215, 0, 0.8)'" // Brighter golden yellow color with some transparency
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("'resize'", resize)
    }
  }, [])

  return (
    <canvas 
      ref={canvasRef}
      className="absolute top-0 right-0 w-1/2 h-full opacity-40" // Increased opacity from 30 to 40
    />
  )
}

