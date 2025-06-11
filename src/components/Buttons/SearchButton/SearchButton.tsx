import SearchIcon from "@mui/icons-material/Search";
import { FC } from "react";
import { SearchButtonProp } from "./types";
import { Button } from "@mui/material";

const SearchButton: FC<SearchButtonProp> = ({ disabled, loading }) => {
  return (
    <Button
      type="submit"
      variant="contained"
      color="primary"
      endIcon={<SearchIcon />}
      sx={{ minWidth: 100 }}
      disabled={disabled}
      loading={loading}
    >
      Search
    </Button>
  );
};

export default SearchButton;
