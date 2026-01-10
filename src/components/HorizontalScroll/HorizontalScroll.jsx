import { useRef } from 'react'
import { card1, card2, card3, card4 } from '../../assets'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function HorizontalScroll() {
  const targetRef = useRef(null)

  const { scrollYProgress } = useScroll({ target: targetRef })
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-70%'])

  return (
    <div
      ref={targetRef}
      className="bg-bg-primary h-[300vh] items-center "
    >
      <div className="h-[50vh] sticky top-40 pt- flex items-center overflow-hidden items-center">
        <motion.div
          style={{ x }}
          className="flex gap-[4vw] px-16"
        >
          <TiltImage src={card1} />
          <TiltImage src={card2} />
          <TiltImage src={card3} />
          <TiltImage src={card4} />
        </motion.div>
      </div>
    </div>
  )
}

/* =======================
   SAFE 3D TILT IMAGE
======================= */

function TiltImage({ src }) {
  const ref = useRef(null)
  const isTouch =
    typeof window !== 'undefined' && 'ontouchstart' in window

  const handleMove = (e) => {
    if (isTouch || !ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const rotateX = ((y / rect.height) - 0.5) * -12
    const rotateY = ((x / rect.width) - 0.5) * 12

    ref.current.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.04)
    `
  }

  const reset = () => {
    if (!ref.current) return
    ref.current.style.transform = `
      perspective(1000px)
      rotateX(0deg)
      rotateY(0deg)
      scale(1)
    `
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className="
        w-[60vw]
        flex-shrink-0
        transition-transform
        duration-300
        ease-out
      "
    >
      <img
        src={src}
        draggable={false}
        className="w-[60vw] h-[50vh] rounded-xl shadow-xl "
      />
    </div>
  )
}
