import { FC, useState } from "react";
import useGetHotelGalleryAPI from "../hooks/useGetHotelGalleryAPI";
import MediaCardSkeleton from "@/components/Skeletons/MediaCardSkeleton";
import { Box, Grid, Modal, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import useRetryHandler from "@/hooks/useRetryHandler";
import HotelImageThumbnail from "./HotelImageThumbnail";
import WithRetry from "@/components/WithRetry";

interface HotelGalleryProps {
  hotelId: string;
}

const HotelGallery: FC<HotelGalleryProps> = ({ hotelId }) => {
  const { hotelGallery, isLoading, isError, refetch } =
    useGetHotelGalleryAPI(hotelId);
  const [open, setOpen] = useState(false);
  const [activeImg, setActiveImg] = useState<string | null>(null);
  const { retryCount, handleRetry } = useRetryHandler(refetch);

  const handleOpen = (url: string) => {
    setActiveImg(url);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setActiveImg(null);
  };

  const renderHotelGallery = hotelGallery.map((photo) => (
    <Grid key={photo.url} size={{ xs: 12, sm: 6, md: 4 }}>
      <HotelImageThumbnail handleOpen={handleOpen} url={photo.url} />
    </Grid>
  ));

  return (
    <WithRetry handleRetry={handleRetry} isError={isError} retryCount={retryCount}>
      <Grid container spacing={2}>
        {isLoading ? <MediaCardSkeleton /> : renderHotelGallery}
      </Grid>

      <Modal open={open} onClose={handleClose}>
        <Box
          position="fixed"
          top={0}
          left={0}
          width="100vw"
          height="100vh"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 16,
              right: 16,
              color: "white",
              zIndex: 2,
            }}
          >
            <CloseIcon />
          </IconButton>
          <Box
            component="img"
            src={activeImg ?? ""}
            alt="Full preview"
            maxWidth="90vw"
            maxHeight="90vh"
            borderRadius={2}
            sx={{
              objectFit: "cover",
            }}
          />
        </Box>
      </Modal>
    </WithRetry>
  );
};

export default HotelGallery;
