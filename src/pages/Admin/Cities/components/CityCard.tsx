import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { City } from "../types";
import { FC } from "react";

interface CityProps {
  city: City;
}

const CityCard: FC<CityProps> = ({ city }) => {
  const { name, description } = city;
  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {description.slice(0, 100)}
          {description.length > 100 && "..."}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="large" color="primary">
          Edit
        </Button>
        <Button size="large" color="error">
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default CityCard;
