import React from "react";
import {
  Avatar,
  Box,
  Typography,
  Paper,
  Stack,
  Divider,
  Button,
} from "@mui/material";
import { useAppSelector } from "@/store/store";
import { selectUser } from "@/features/User";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WorkIcon from "@mui/icons-material/Work";

const Profile: React.FC = () => {
  const { family_name, given_name, userType, user_id } =
    useAppSelector(selectUser);

  return (
    <Box>
      <Paper
        elevation={3}
        sx={{
          maxWidth: 600,
          mx: "auto",
          mt: -10,
          p: 4,
          borderRadius: 3,
        }}
      >
        <Stack direction="row" spacing={3} alignItems="center">
          <Avatar
            sx={{
              width: 90,
              height: 90,
              fontSize: 36,
              bgcolor: "#1976d2",
            }}
          >
            {given_name?.[0]}
            {family_name?.[0]}
          </Avatar>
          <Box>
            <Typography variant="h5" fontWeight="bold">
              {given_name} {family_name}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {userType} — ID: {user_id}
            </Typography>
          </Box>
        </Stack>
        <Divider sx={{ my: 3 }} />
        <Stack spacing={2}>
          <Box display="flex" alignItems="center" gap={1}>
            <EmailIcon color="action" />
            <Typography>Email: example@email.com</Typography>
          </Box>
          <Box display="flex" alignItems="center" gap={1}>
            <LocationOnIcon color="action" />
            <Typography>Location: Palestine</Typography>
          </Box>
          <Box display="flex" alignItems="center" gap={1}>
            <WorkIcon color="action" />
            <Typography>Role: Front-End Developer</Typography>
          </Box>
        </Stack>
        <Box textAlign="right" mt={3}>
          <Button variant="contained" color="primary">
            Edit Profile
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Profile;
