import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { AppLink, AppLinkThemes } from './app-link'

export default {
  title: 'shared/AppLink',
  component: AppLink,
} as ComponentMeta<typeof AppLink>

const Template: ComponentStory<typeof AppLink> = args => <AppLink {...args} />

export const Default = Template.bind({})
Default.args = {
  theme: AppLinkThemes.PRIMARY,
  to: '/',
  children: 'Link text',
}
