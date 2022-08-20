import { ComponentStory, ComponentMeta } from '@storybook/react'

import { HomeSlider } from '.'

export default {
  title: 'HomeSlider',
  component: HomeSlider
} as ComponentMeta<typeof HomeSlider>

const Template: ComponentStory<typeof HomeSlider> = () => <HomeSlider />

export const Default = Template.bind({})
