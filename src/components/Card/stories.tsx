import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Card } from '.'

export default {
  title: 'Components/Common/Card',
  component: Card
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />

export const Default = Template.bind({})

Default.args = {
  border: true,
  title: 'Titulo do card',
  size: 'medium',
  subtitle:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  background:
    'https://img.freepik.com/fotos-gratis/banco-de-madeira-no-deck-do-lago-cercado-de-verdes_181624-46369.jpg?w=1380&t=st=1660936988~exp=1660937588~hmac=e332cca19c12fa2522368a72a2ccee845f08c183768136d8fd4bd7126fbef4f6'
}
