import { Button } from "@mui/material";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { NavigationButtonProps } from "./types";

const NavigationButton: FC<NavigationButtonProps> = ({ to, caption }) => {
  const navigate = useNavigate();
  return (
    <Button variant="contained" onClick={() => navigate(to)}>
      {caption}
    </Button>
  );
};

export default NavigationButton;
