import { useDebounce } from "@/hooks/useDebounce";
import { Box, IconButton, InputAdornment, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";

interface SearchHotelProps {
  onSearch: (query: string) => void;
}

const SearchHotel = ({ onSearch }: SearchHotelProps) => {
  const [input, setInput] = useState("");
  const debounceValue = useDebounce(input);

  useEffect(() => {
    onSearch(debounceValue.trim());
  }, [debounceValue, onSearch]);

  const handleClear = () => {
    setInput("");
    onSearch("");
  };

  return (
    <Box p={2} borderRadius={3} display="flex" alignItems="center" gap={2}>
      <TextField
        label="Hotel"
        placeholder="Enter a hotel name"
        size="small"
        fullWidth
        value={input}
        onChange={(e) => setInput(e.target.value)}
        slotProps={{
          input: {
            endAdornment: input && (
              <InputAdornment position="end">
                <IconButton onClick={handleClear} size="small">
                  <ClearIcon />
                </IconButton>
              </InputAdornment>
            ),
          },
        }}
      />
    </Box>
  );
};

export default SearchHotel;
