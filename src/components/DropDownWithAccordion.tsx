import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/Box";
import { Box, Divider } from "@mui/material";
import Typography from "@mui/material/Typography";
import MultipleSelect from "./MultipleSelect";

export default function DropDownWithAccordion() {
  return (
    <Box>
      <Accordion
        sx={{
          borderRadius: "5px",
          backgroundColor: "#fff !important",
          boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.1)",
        }}
        expanded
      >
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <Typography sx={{ fontSize: "18px" }}>Access Type</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: "#fbfbfd" }}>
          <Divider variant="middle" sx={{ mx: 0 }} />
          <Typography
            variant="caption"
            display="block"
            sx={{
              mt: 2,
              textTransform: "uppercase",
              px: 2,
              fontStretch: "normal",
              fontSize: "12px",
              color: "#b4b4b4",
            }}
            gutterBottom
          >
            Select access type
          </Typography>
          <MultipleSelect />
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
