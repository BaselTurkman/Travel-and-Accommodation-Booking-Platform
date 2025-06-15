import { selectUser } from "@/features/User";
import { useAppSelector } from "@/store/store";
import { Box, Typography, Card, CardContent, Divider } from "@mui/material";

const UserInformation = () => {
  const user = useAppSelector(selectUser);
  const { family_name, given_name, userType, user_id } = user;

  return (
    <Card variant="outlined" sx={{ mb: 3, borderRadius: 3, boxShadow: 2 }}>
      <CardContent>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          User Information
        </Typography>
        <Divider sx={{ mb: 2 }} />

        <Box display="flex" flexDirection="column" gap={1}>
          <Typography variant="body1">
            <strong>Full Name:</strong> {given_name} {family_name}
          </Typography>
          <Typography variant="body1">
            <strong>User ID:</strong> {user_id}
          </Typography>
          <Typography variant="body1">
            <strong>User Type:</strong> {userType}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default UserInformation;
