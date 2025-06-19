import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { City } from "../types";
import { FC } from "react";
import { useConfirmationDialog } from "@/hooks/useConfirmationDialog";
import useDeleteCityAPI from "../hooks/useDeleteCityAPI";

interface CityProps {
  city: City;
  onEdit: (city: City) => void;
  cardColor?: string;
}

const CityCard: FC<CityProps> = ({ city, onEdit, cardColor }) => {
  const { name, description, id } = city;
  const { showConfirmationDialog } = useConfirmationDialog();
  const { deleteCity, isPending } = useDeleteCityAPI(id);

  const handleDelete = () => {
    showConfirmationDialog({
      message: "Are you sure you want to delete this city?",
      title: "Delete City",
      onConfirm: deleteCity,
    });
  };

  return (
    <Card sx={{ bgcolor: cardColor }}>
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
        <Button size="large" color="primary" onClick={() => onEdit(city)}>
          Edit
        </Button>
        <Button
          size="large"
          color="error"
          onClick={handleDelete}
          disabled={isPending}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default CityCard;
