import { useEffect, useRef, useState } from 'react'
import * as S from './styles'
import { useInView } from 'framer-motion'
import { useCurrentClass } from '@/contexts/currentClass'

const ViewBasedAnimation = () => {
  const { currentClass } = useCurrentClass()

  if (currentClass === 'view-based') return <ViewBasedComponent />
}

const ViewBasedComponent = () => {
  const ref = useRef(null)
  const teste = useRef(null)
  const isInView = useInView(ref, { amount: 0.3, once: false })

  useEffect(() => {
    console.log('Is in view -> ', isInView)
  }, [isInView])

  useEffect(() => {
    console.log(isInView)
  }, [isInView])

  return (
    <>
      <S.EmptyContainer></S.EmptyContainer>
      <S.Container
        ref={teste}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1 }}
      ></S.Container>
      <div
        ref={ref}
        style={{
          height: '100vh',
          background: isInView ? 'black' : 'red',
          transition: '1s background',
        }}
      ></div>
    </>
  )
}

export default ViewBasedAnimation
