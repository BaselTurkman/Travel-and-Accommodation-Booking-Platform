import { Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { FC } from "react";
import { EditButtonProps } from "./types";


const EditButton: FC<EditButtonProps> = ({ onClick, children = "Edit", ...rest }) => {
  return (
    <Button
      variant="contained"
      color="warning"
      startIcon={<EditIcon />}
      onClick={onClick}
      size="medium"
      {...rest}
    >
      {children}
    </Button>
  );
};

export default EditButton;
