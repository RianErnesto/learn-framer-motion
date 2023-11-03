import * as S from './styles'
import { Button } from '@/components'
import { MotionConfig } from 'framer-motion'
import { useCurrentClass } from '@/contexts/currentClass'
import { useRef } from 'react'

const Gestures = () => {
  const { currentClass } = useCurrentClass()
  const constraintsRef = useRef(null)

  if (currentClass === 'gesture')
    return (
      <S.Container>
        <MotionConfig transition={{ duration: 0.125, ease: 'easeInOut' }}>
          <Button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95, rotate: '2.5deg' }}
          >
            Click me!
          </Button>
          <Button
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.85, rotate: '-2.5deg' }}
          >
            Click me!
          </Button>
          <S.DraggableArea ref={constraintsRef}>
            <Button
              drag
              dragConstraints={constraintsRef}
              dragSnapToOrigin
              dragElastic={{ bottom: 0, left: 0, right: 0, top: 0 }}
            >
              Drag Me
            </Button>
          </S.DraggableArea>
        </MotionConfig>
      </S.Container>
    )
}

export default Gestures
