import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectSmall() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      {/* <InputLabel id="demo-select-small-label">Sort</InputLabel> */}
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={age}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>All</em>
        </MenuItem>
        <MenuItem value={10}>featured</MenuItem>
        <MenuItem value={20}>Best Selling</MenuItem>
        <MenuItem value={30}>Alphabetically, A-Z</MenuItem>
        <MenuItem value={30}>Alphabetically, Z-A</MenuItem>
        <MenuItem value={30}>Price, low to high</MenuItem>
        <MenuItem value={30}>Price, high to low</MenuItem>
        <MenuItem value={30}>Date, old to new</MenuItem>
        <MenuItem value={30}>Date, new to old</MenuItem>
      </Select>
    </FormControl>
  );
}
