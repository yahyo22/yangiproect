import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function SelectSmall() {
  const [language, setLanguage] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small">Language</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={language}
        label="Language"
        onChange={handleChange}
      >
        <MenuItem value={10}>Uzb</MenuItem>
        <MenuItem value={20}>Ru</MenuItem>
        <MenuItem value={30}>En</MenuItem>
      </Select>
    </FormControl>
  );
}
