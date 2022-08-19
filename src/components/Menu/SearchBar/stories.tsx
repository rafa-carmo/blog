import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SearchBar } from '.'

export default {
  title: 'Components/Common/Menu/SearchBar',
  component: SearchBar
} as ComponentMeta<typeof SearchBar>

const Template: ComponentStory<typeof SearchBar> = () => (
  <div className="w-full flex items-center justify-center">
    <SearchBar />
  </div>
)

export const Default = Template.bind({})
