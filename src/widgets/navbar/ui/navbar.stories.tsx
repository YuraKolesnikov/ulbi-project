import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Navbar } from './navbar'

export default {
  title: 'widgets/Navbar',
  component: Navbar,
} as ComponentMeta<typeof Navbar>

const Template: ComponentStory<typeof Navbar> = () => <Navbar/>
export const Default = Template.bind({})
