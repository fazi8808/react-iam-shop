import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import CategoryListItem from "../components/CategoryListItem";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import { ReactComponent as ListViewIcon } from "../assets/listView.svg";
import { ReactComponent as ListViewSelectedIcon } from "../assets/listViewSelected.svg";

function SubHeader(props: any) {
  const { toggleHandle, showView = 1 } = props;

  return (
    <Container maxWidth="xl">
      <Toolbar disableGutters sx={{ borderBottom: "1px solid #d8d8dd", mb: 2 }}>
        <CategoryListItem />
        <Box sx={{ flexGrow: 0 }}>
          <div
            style={{
              display: "flex",
            }}
          >
            <IconButton
              onClick={() => toggleHandle(1)}
              sx={{ "&:hover": { backgroundColor: "transparent" } }}
            >
              {showView === 1 ? <ListViewSelectedIcon /> : <ListViewIcon />}
            </IconButton>
            <IconButton
              onClick={() => toggleHandle(2)}
              sx={{ "&:hover": { backgroundColor: "transparent" } }}
            >
              <GridViewOutlinedIcon />
            </IconButton>
          </div>
        </Box>
      </Toolbar>
    </Container>
  );
}
export default SubHeader;
