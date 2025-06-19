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
}

const CityCard: FC<CityProps> = ({ city }) => {
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
        <Button
          size="large"
          color="error"
          onClick={handleDelete}
          loading={isPending}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default CityCard;
