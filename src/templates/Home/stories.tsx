import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Home } from '.'
import mock from './mock'

export default {
  title: 'Pages/Homepage',
  component: Home,
  args: mock
} as ComponentMeta<typeof Home>

const Template: ComponentStory<typeof Home> = (args) => <Home {...args} />

export const Default = Template.bind({})
