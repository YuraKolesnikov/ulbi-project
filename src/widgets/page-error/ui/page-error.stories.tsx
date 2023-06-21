import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { PageError } from './page-error'

export default {
  title: 'widgets/PageError',
  component: PageError,
} as ComponentMeta<typeof PageError>

const Template: ComponentStory<typeof PageError> = () => <PageError/>
export const Default = Template.bind({})
