import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";

interface SearchHotelProps {
  onSearch: (query: string) => void;
}

const SearchHotel = ({ onSearch }: SearchHotelProps) => {
  const [input, setInput] = useState("");

  const handleSearchClick = () => {
    onSearch(input.trim());
  };

  const handleReset = () => {
    setInput("");
    onSearch(""); // Reset to show all cities
  };

  return (
    <Box
      sx={{
        p: 2,
        borderRadius: 3,
        display: "flex",
        alignItems: "center",
        gap: 2,
        minWidth: 300,
      }}
    >
      <TextField
        label="Hotel"
        placeholder="Enter a Hotel name"
        size="small"
        fullWidth
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSearchClick();
        }}
      />
      <Button variant="contained" onClick={handleSearchClick}>
        Search
      </Button>
      {input && (
        <Button variant="outlined" onClick={handleReset} color="secondary">
          Reset
        </Button>
      )}
    </Box>
  );
};

export default SearchHotel;