import { Box, Card, CardContent, CardMedia, Grow } from "@mui/material";
import { FC } from "react";
import { BaseCardProps } from "./types";

const BaseCard: FC<BaseCardProps> = ({
  image,
  alt,
  children,
  growIn = true,
  height = 180,
}) => {
  const card = (
    <Card
      elevation={3}
      sx={{
        borderRadius: 3,
        overflow: "hidden",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.3s",
        "&:hover": {
          transform: "scale(1.02)",
        },
      }}
    >
      <CardMedia
        component="img"
        height={height}
        image={image}
        alt={alt}
        loading="lazy"
      />
      <CardContent sx={{ flexGrow: 1 }}>{children}</CardContent>
    </Card>
  );

  return growIn ? (
    <Grow in timeout={500}>
      <Box height="100%">{card}</Box>
    </Grow>
  ) : (
    card
  );
};

export default BaseCard;
