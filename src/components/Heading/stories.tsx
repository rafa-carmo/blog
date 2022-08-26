import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Heading } from '.'

export default {
  title: 'Heading',
  component: Heading
} as ComponentMeta<typeof Heading>

const Template: ComponentStory<typeof Heading> = (args) => <Heading {...args} />

export const Title = Template.bind({})

Title.args = {
  text: 'Title'
}
