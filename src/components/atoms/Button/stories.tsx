import { Meta, StoryObj } from '@storybook/react'
import Button from '.'

const meta: Meta = {
  title: 'Button',
  component: Button,
}

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => <Button>Teste</Button>,
}
