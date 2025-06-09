import { Stack } from "@mui/material";
import Modal from "@mui/material/Modal";
import { FC } from "react";
import CircularProgress from '@mui/material/CircularProgress';

const BlockUI: FC = () => {

  return (
    <Modal
      aria-labelledby="suspense-modal"
      aria-describedby="Waiting for data to load"
      open={true}
      style={{ zIndex: 1400 }}
      hideBackdrop
    >
      <Stack
        alignItems="center"
        justifyContent="center"
        height="100vh"
        sx={{
          outline: "none",
          bgcolor: "background.paper",
        }}
      >
        <CircularProgress/>
      </Stack>
    </Modal>
  );
};

export default BlockUI;