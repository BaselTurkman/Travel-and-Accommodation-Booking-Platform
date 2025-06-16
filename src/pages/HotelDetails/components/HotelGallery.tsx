import { FC, useState } from "react";
import useGetHotelGalleryAPI from "../hooks/useGetHotelGalleryAPI";
import MediaCardSkeleton from "@/components/Skeletons/MediaCardSkeleton";
import { Box, Grid, Modal, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface HotelGalleryProps {
  hotelId: string;
}

const HotelGallery: FC<HotelGalleryProps> = ({ hotelId }) => {
  const { hotelGallery, isLoading } = useGetHotelGalleryAPI(hotelId);
  const [open, setOpen] = useState(false);
  const [activeImg, setActiveImg] = useState<string | null>(null);

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
      <Box
        component="img"
        src={photo.url}
        alt="Hotel photo"
        onClick={() => handleOpen(photo.url)}
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
    </Grid>
  ));

  return (
    <>
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
    </>
  );
};

export default HotelGallery;
