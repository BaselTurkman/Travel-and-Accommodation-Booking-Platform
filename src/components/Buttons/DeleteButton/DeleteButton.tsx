import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { FC } from "react";
import { DeleteButtonProps } from "./types";

const DeleteButton: FC<DeleteButtonProps> = ({ onClick, children = "Delete", ...rest }) => {
  return (
    <Button
      variant="contained"
      color="error"
      startIcon={<DeleteIcon />}
      onClick={onClick}
      size="medium"
      {...rest}
    >
      {children}
    </Button>
  );
};

export default DeleteButton;
