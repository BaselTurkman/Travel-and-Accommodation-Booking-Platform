import { Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { FC } from "react";
import { EditButtonProps } from "./types";

const EditButton: FC<EditButtonProps> = ({
  onClick,
  children = "Edit",
  ...rest
}) => {
  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: "#c45500",
        "&:hover": { backgroundColor: "#a34400" },
      }}
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
