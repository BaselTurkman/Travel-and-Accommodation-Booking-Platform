import EditButton from "@/components/Buttons/EditButton";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof EditButton> = {
  title: "Components/Buttons/EditButton",
  component: EditButton,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof EditButton>;

export const Default: Story = {
  args: {
    children: "Edit",
    onClick: () => alert("Edit clicked!"),
  },
};
