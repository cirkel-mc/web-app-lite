import type { Meta, StoryObj } from "@storybook/react";

import Button from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Component: Story = {
  args: {
    children: 'Test',
    classes: '',
    id: 'id',
    dataTestId: 'data-testId',
    size: 'md',
    type: 'text',
    fullwidth: true,
    startIcon: null,
    endIcon: null,
    disabled: false,
    round: 'sm',
    onClick: () => {}
  },
};