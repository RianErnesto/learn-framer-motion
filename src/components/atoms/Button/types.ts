import { ReactNode } from 'react'
import { HTMLMotionProps } from 'framer-motion'

export interface ButtonProps extends HTMLMotionProps<'button'> {
  children: ReactNode
}
