import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Sidebar } from './sidebar'

export default {
  title: 'widgets/Sidebar',
  component: Sidebar,
} as ComponentMeta<typeof Sidebar>

const Template: ComponentStory<typeof Sidebar> = () => <Sidebar/>
export const Default = Template.bind({})
