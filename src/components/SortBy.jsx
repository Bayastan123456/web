import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Typography } from "@mui/material";

export default function SelectVariants() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Typography>Sort By:</Typography>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Type</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>featured</MenuItem>
          <MenuItem value={20}>Best Selling</MenuItem>
          <MenuItem value={30}>Alphabetically, A-Z</MenuItem>
          <MenuItem value={40}>Alphabetically, Z-A</MenuItem>
          <MenuItem value={50}>Price, low to high</MenuItem>
          <MenuItem value={60}>Price, high to low</MenuItem>
          <MenuItem value={70}>Date, old to new</MenuItem>
          <MenuItem value={80}>Date, new to old</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
