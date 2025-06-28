import DeleteButton from "@/components/Buttons/DeleteButton";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof DeleteButton> = {
  title: "Components/Buttons/DeleteButton",
  component: DeleteButton,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof DeleteButton>;

export const Default: Story = {
  args: {
    children: "Delete",
    onClick: () => alert("Delete clicked"),
  },
};
