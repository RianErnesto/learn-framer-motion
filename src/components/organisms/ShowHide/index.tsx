import { useState } from 'react'
import * as S from './styles'
import { Button, Square } from '@/components'
import { AnimatePresence } from 'framer-motion'
import { useCurrentClass } from '@/contexts/currentClass'

const ShowHide = () => {
  const [isVisible, setIsVisible] = useState(true)
  const { currentClass } = useCurrentClass()

  if (currentClass === 'show-hide')
    return (
      <S.Container>
        <AnimatePresence mode="popLayout">
          <Button key="button" onClick={() => setIsVisible(!isVisible)} layout>
            Show / Hide
          </Button>
          {isVisible && (
            <Square
              key="square"
              initial={{ rotate: '0deg', scale: 0, y: 0 }}
              animate={{
                rotate: '180deg',
                scale: 1,
                y: [0, 150, -150, -150, 0],
              }}
              exit={{ rotate: '0deg', scale: 0, y: 0 }}
              transition={{
                duration: 1,
                ease: 'backInOut',
                times: [0, 0.25, 0.5, 0.85, 1],
              }}
            />
          )}
        </AnimatePresence>
      </S.Container>
    )
}

export default ShowHide
