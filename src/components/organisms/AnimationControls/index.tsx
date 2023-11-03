import { Button, Square } from '@/components'
import * as S from './styles'
import { useAnimationControls } from 'framer-motion'
import { useCurrentClass } from '@/contexts/currentClass'

const AnimationControls = () => {
  const controls = useAnimationControls()
  const { currentClass } = useCurrentClass()

  const handleClick = () => {
    controls.start('flip')
  }

  if (currentClass === 'animation-controls')
    return (
      <S.Container>
        <Button onClick={handleClick}>Click me</Button>
        <Square
          variants={{
            initial: {
              rotate: '0deg',
            },
            flip: {
              rotate: '360deg',
            },
          }}
          initial="initial"
          animate={controls}
        />
      </S.Container>
    )
}

export default AnimationControls
