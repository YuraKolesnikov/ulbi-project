import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { LangSwitcher } from './lang-switcher'

export default {
  title: 'widgets/LangSwitcher',
  component: LangSwitcher,
} as ComponentMeta<typeof LangSwitcher>

const Template: ComponentStory<typeof LangSwitcher> = () => <LangSwitcher/>
export const Default = Template.bind({})
