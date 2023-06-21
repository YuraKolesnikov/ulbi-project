import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { ThemeSwitcher } from './theme-switcher'

export default {
  title: 'widgets/ThemeSwitcher',
  component: ThemeSwitcher,
} as ComponentMeta<typeof ThemeSwitcher>

const Template: ComponentStory<typeof ThemeSwitcher> = () => <ThemeSwitcher/>
export const Default = Template.bind({})
