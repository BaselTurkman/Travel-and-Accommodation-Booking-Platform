import AddToCartButton from "@/components/Buttons/AddToCartButton";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof AddToCartButton> = {
  title: "Components/Buttons/AddToCartButton",
  component: AddToCartButton,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof AddToCartButton>;

export const Default: Story = {
  args: {
    text: "Add to Cart",
    onClick: () => alert("Item added to cart!"),
  },
};

export const Disabled: Story = {
  args: {
    text: "Add to Cart",
    disabled: true,
  },
};

export const FullWidthOutlined: Story = {
  args: {
    text: "Add to Cart",
    fullWidth: true,
    variant: "outlined",
  },
};

export const RemoveFromCart: Story = {
  args: {
    text: "Remove from Cart",
    color: "error",
    variant: "contained",
    onClick: () => alert("Item removed from cart!"),
  },
};