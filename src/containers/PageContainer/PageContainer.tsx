import { Card, CardProps } from "@mui/material";
import { FC } from "react";

const PageContainer: FC<CardProps> = ({ children, sx, ...rest }) => {
  return (
    <Card
      sx={{
        width: "90%",
        m: "auto",
        my: 5,
        p: 4,
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Card>
  );
};

export default PageContainer;