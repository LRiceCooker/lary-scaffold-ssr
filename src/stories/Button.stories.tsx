import type { Meta, StoryObj } from '@storybook/react';

import Button from '../components/Button';
import ButtonOutline from '../components/ButtonOutline';
import MainProvider from '../providers/MainProvider';

const meta = {
  title: 'Design/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;


export const Regular: Story = {
  render: () => (
    <MainProvider>
      <Button>Coucou bandes de nouilles</Button>
    </MainProvider>
  ),
};

export const Outline: Story = {
  render: () => (
    <MainProvider>
      <ButtonOutline>Coucou bandes de nouilles</ButtonOutline>
    </MainProvider>
  ),
};