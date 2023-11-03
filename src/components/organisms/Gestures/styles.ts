import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled.div`
  display: grid;
  place-content: center;
  height: calc(100vh - 60px);
  gap: 0.8rem;
`

export const DraggableArea = styled(motion.div)`
  background-color: black;
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`
