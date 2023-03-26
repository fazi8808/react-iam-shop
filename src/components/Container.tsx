import * as React from "react";
import { Grid, Box, Container } from "@mui/material";
import DropDownWithAccordian from "./DropDownWithAccordian";
import SearchField from "./SearchField";
import TableView from "./TableView";
import BoxesLayout from "./BoxesLayout";
import SubHeader from "../components/SubHeader";

export default function ContainerWrapper() {
  const toggleHandle = (index: number) => {
    console.log(index, "index");
    setShowView(index);
  };
  const [showView, setShowView] = React.useState<number>(1);

  return (
    <Box sx={{ flexGrow: 1, mt: 3 }}>
      <SubHeader toggleHandle={toggleHandle} showView={showView} />
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
            <DropDownWithAccordian />
          </Grid>
          <Grid item xs>
            <SearchField />
            {showView === 1 ? <TableView /> : <BoxesLayout />}

            {/* Pagination */}
            {/* <Pagination
              sx={{ p: 3, background: "transparent" }}
              hidePrevButton={page === 1}
              hideNextButton={page === Math.ceil(rows.length / 10)}
              boundaryCount={2}
              defaultPage={0}
              onChange={handleChangePage}
              page={page}
              count={Math.ceil(rows.length / 10)}
              variant="outlined"
              shape="rounded"
            /> */}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
