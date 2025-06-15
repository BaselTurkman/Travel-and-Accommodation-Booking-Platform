import { FC } from "react";
import { Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { AddToCartButtonProps } from "./types";

const AddToCartButton: FC<AddToCartButtonProps> = ({
  onClick,
  disabled = false,
  fullWidth = false,
  text = "Add to Cart",
}) => {
  return (
    <Button
      variant="outlined"
      color="primary"
      startIcon={<ShoppingCartIcon />}
      onClick={onClick}
      disabled={disabled}
      fullWidth={fullWidth}
    >
      {text}
    </Button>
  );
};

export default AddToCartButton;
