import * as S from './styles'
import { useCurrentClass } from '@/contexts/currentClass'
import { useScroll } from 'framer-motion'

const ScrollAnimations = () => {
  const { currentClass } = useCurrentClass()
  const { scrollYProgress } = useScroll()

  if (currentClass === 'scroll-animations')
    return (
      <div>
        <S.ProgressBar style={{ scaleX: scrollYProgress }} />
        <S.ScrollContainer />
      </div>
    )
}

export default ScrollAnimations
