import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function ProductsAccardion() {
  return (
    <div style={{ maxWidth: "30vw" }}>
      <Typography
        variant="h5"
        sx={{ marginLeft: "20%", color: "blue", fontWeight: "800" }}
      >
        Filters
      </Typography>
      <Accordion disableGutters elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Continents</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControlLabel
            control={<Checkbox default />}
            label="Africa(10)"
            sx={{ display: "block" }}
          />
          <FormControlLabel
            control={<Checkbox default />}
            label="Antarctica(1)"
            sx={{ display: "block" }}
          />
          <FormControlLabel
            control={<Checkbox default />}
            label="Asia(12)"
            sx={{ display: "block" }}
          />
          <FormControlLabel
            control={<Checkbox default />}
            label="Australia Pacific(2)"
            sx={{ display: "block" }}
          />
          <FormControlLabel
            control={<Checkbox default />}
            label="Carribean(4)"
            sx={{ display: "block" }}
          />
          <FormControlLabel
            control={<Checkbox default />}
            label="Europe(19)"
            sx={{ display: "block" }}
          />
          <FormControlLabel
            control={<Checkbox default />}
            label="Midle East(3)"
            sx={{ display: "block" }}
          />
          <FormControlLabel
            control={<Checkbox default />}
            label="North America(3)"
            sx={{ display: "block" }}
          />
          <FormControlLabel
            control={<Checkbox default />}
            label="South America(2)"
            sx={{ display: "block" }}
          />
        </AccordionDetails>
      </Accordion>
      <Accordion disableGutters elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Country</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControlLabel
            control={<Checkbox default />}
            label="Africa(10)"
            sx={{ display: "block" }}
          />
          <FormControlLabel
            control={<Checkbox default />}
            label="Antarctica(1)"
            sx={{ display: "block" }}
          />
          <FormControlLabel
            control={<Checkbox default />}
            label="Asia(12)"
            sx={{ display: "block" }}
          />
          <FormControlLabel
            control={<Checkbox default />}
            label="Australia Pacific(2)"
            sx={{ display: "block" }}
          />
          <FormControlLabel
            control={<Checkbox default />}
            label="Carribean(4)"
            sx={{ display: "block" }}
          />
          <FormControlLabel
            control={<Checkbox default />}
            label="Europe(19)"
            sx={{ display: "block" }}
          />
          <FormControlLabel
            control={<Checkbox default />}
            label="Midle East(3)"
            sx={{ display: "block" }}
          />
          <FormControlLabel
            control={<Checkbox default />}
            label="North America(3)"
            sx={{ display: "block" }}
          />
          <FormControlLabel
            control={<Checkbox default />}
            label="South America(2)"
            sx={{ display: "block" }}
          />
          <FormControlLabel
            control={<Checkbox default />}
            label="Africa(10)"
            sx={{ display: "block" }}
          />
          <FormControlLabel
            control={<Checkbox default />}
            label="Antarctica(1)"
            sx={{ display: "block" }}
          />
          <FormControlLabel
            control={<Checkbox default />}
            label="Asia(12)"
            sx={{ display: "block" }}
          />
          <FormControlLabel
            control={<Checkbox default />}
            label="Australia Pacific(2)"
            sx={{ display: "block" }}
          />
        </AccordionDetails>
      </Accordion>
      <Accordion disableGutters elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Lonely Planet Kids</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControlLabel
            control={<Checkbox default />}
            label="Africa(10)"
            sx={{ display: "block" }}
          />
          <FormControlLabel
            control={<Checkbox default />}
            label="Antarctica(1)"
            sx={{ display: "block" }}
          />
          Aidar, [06.06.2023 18:04]
          <FormControlLabel
            control={<Checkbox default />}
            label="Asia(12)"
            sx={{ display: "block" }}
          />
          <FormControlLabel
            control={<Checkbox default />}
            label="Australia Pacific(2)"
            sx={{ display: "block" }}
          />
        </AccordionDetails>
      </Accordion>
      <Accordion disableGutters elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Guidebook</Typography>
        </AccordionSummary>
      </Accordion>
    </div>
  );
}
