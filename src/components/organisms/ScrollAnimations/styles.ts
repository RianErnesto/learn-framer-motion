import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

export const ProgressBar = styled(motion.div)`
  background-color: blue;
  transform-origin: left;
  position: sticky;
  top: 0;
  width: 100%;
  height: 20px;
`

export const ScrollContainer = styled.div`
  height: 300vh;
`
