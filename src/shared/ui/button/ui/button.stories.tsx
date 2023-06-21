import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Button, ButtonThemes } from './button'
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator/theme-decorator'
import { Theme } from 'app/providers/theme-provider'

export default {
  title: 'Shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = args => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Button',
}

export const Clear = Template.bind({});
Clear.args = {
  children: 'Text',
  theme: ButtonThemes.CLEAR,
};

export const ClearDark = Template.bind({})
ClearDark.args = {
  children: 'Text',
  theme: ButtonThemes.CLEAR,
}
ClearDark.decorators = [ThemeDecorator(Theme.DARK)]
