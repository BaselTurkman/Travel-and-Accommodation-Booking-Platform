import { Container, ContainerProps, Fade } from "@mui/material";
import { FC } from "react";

const PageContainer: FC<ContainerProps> = ({ children, sx, ...rest }) => {
  return (
    <Fade in={true} timeout={500}>
      <Container sx={{ p: 5, m: "auto", my: 5, ...sx }} {...rest}>
        {children}
      </Container>
    </Fade>
  );
};

export default PageContainer;
