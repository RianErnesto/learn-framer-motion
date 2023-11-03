import { Meta, StoryObj } from '@storybook/react'
import Square from '.'
import { SquareProps } from './types'

const meta: Meta = {
  title: 'Square',
  component: Square,
}

export default meta
type Story = StoryObj<SquareProps>

export const Default: Story = {
  render: () => <Square />,
}
