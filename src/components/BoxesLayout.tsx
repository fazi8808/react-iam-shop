import * as React from "react";
import { Box, Grid, Typography, Button, SwipeableDrawer } from "@mui/material";

import BackgroundHeader from "../assets/bgheader.png";
import Details from "./Details";

const subheading = {
  p: 1,
  lineHeight: 1.33,
  fontWeight: 500,
  fontSize: "12px",
  color: "#9b9b9b",
  textTransform: "uppercase",
};

const textStyle = {
  pt: 0,
  p: 1,
  lineHeight: 1.14,
  fontSize: "14px",
  color: "#000",
  letterSpacing: "normal",
  fontStyle: "normal",
  fontStretch: "normal",
};

export default function ResponsiveGrid() {
  const [open, setOpen] = React.useState(false);

  const close = () => {
    setOpen(false);
  };
  return (
    <Box sx={{ flexGrow: 1, mt: 2.5 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3, p: 2 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Box
              sx={{
                borderRadius: "8px",
                boxShadow: "0 4px 16px 0 rgba(0, 0, 0, 0.05)",
                backgroundColor: "#fff",
              }}
            >
              <Typography
                sx={{
                  borderTopRightRadius: "8px !important",
                  borderTopLeftRadius: "8px !important",
                  backgroundImage: `url(${BackgroundHeader}), linear-gradient(104deg, #682a94, #05afe0)`,
                  height: "80px",
                  p: 1,
                  pl: 3,
                  lineHeight: 3.33,
                  fontWeight: 500,
                  fontSize: "18px",
                  color: "#fff",
                  letterSpacing: "normal",
                  fontStyle: "normal",
                  fontStretch: "normal",
                }}
              >
                Friendly Name
              </Typography>
              <Box sx={{ p: 1.5 }}>
                <Typography sx={subheading}>Friendly Name</Typography>
                <Typography sx={textStyle}>Friendly Name</Typography>

                <Typography sx={subheading}>DNS Name</Typography>
                <Typography sx={textStyle}>DNS Name</Typography>

                <Typography sx={subheading}>Description</Typography>
                <Typography sx={textStyle}>Description</Typography>

                <Typography sx={subheading}>End Date</Typography>
                <Typography sx={textStyle}>21/11/2021, 02:33 am.</Typography>
              </Box>
              <Box
                m={1}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Button
                  onClick={() => setOpen(!open)}
                  sx={{
                    width: "95%",
                    mb: 3,
                    mt: 1,
                    backgroundColor: "#01ae8f",
                    border: "solid 1px #01ae8f",
                    borderRadius: "4px",
                    color: "#fff",
                  }}
                  variant="contained"
                >
                  Details
                </Button>
              </Box>
            </Box>
          </Grid>
        ))}

        <SwipeableDrawer
          anchor={"right"}
          open={open}
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          sx={{ background: "transparent" }}
        >
          <Details close={close} />
        </SwipeableDrawer>
      </Grid>
    </Box>
  );
}
