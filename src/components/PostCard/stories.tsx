import { ComponentStory, ComponentMeta } from '@storybook/react'

import { PostCard } from '.'

export default {
  title: 'PostCard',
  component: PostCard
} as ComponentMeta<typeof PostCard>

const Template: ComponentStory<typeof PostCard> = (args) => (
  <PostCard {...args} />
)

export const Default = Template.bind({})

Default.args = {
  category: 'Fullstack',
  title: 'Titulo de teste',
  createdAt: new Date(Date.now()),
  background: {
    url: 'https://st4.depositphotos.com/13349494/26799/i/450/depositphotos_267998854-stock-photo-woman-virtual-reality-headset-pointing.jpg',
    alt: 'string'
  }
}
