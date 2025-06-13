import { Button } from "@mui/material";
import { FC } from "react";
import { ResetButtonProps } from "./types";

const ResetButton: FC<ResetButtonProps> = ({ onClick }) => {
  return (
    <Button
      onClick={onClick}
      variant="outlined"
      color="secondary"
      sx={{ minWidth: "120px" }}
    >
      Reset
    </Button>
  );
};

export default ResetButton;
