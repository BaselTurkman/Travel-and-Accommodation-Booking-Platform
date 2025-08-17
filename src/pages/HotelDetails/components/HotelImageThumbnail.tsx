import { Box } from "@mui/material";
import { FC } from "react";

interface HotelImageThumbnailProps {
  url: string;
  handleOpen: (url: string) => void;
}

const HotelImageThumbnail: FC<HotelImageThumbnailProps> = ({
  url,
  handleOpen,
}) => {
  return (
    <Box
      component="img"
      src={url}
      alt="Hotel photo"
      onClick={() => handleOpen(url)}
      width="100%"
      height={250}
      borderRadius={2}
      sx={{
        objectFit: "cover",
        cursor: "pointer",
        transition: "0.3s",
        "&:hover": {
          opacity: 0.9,
        },
      }}
    />
  );
};

export default HotelImageThumbnail;
