import { IconButton, Paper, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchField() {
  return (
    <Paper
      component="form"
      sx={{
        border: "solid 1px #d8d8dd",
        boxShadow: "0 2px 8px 0 rgba(0, 0, 0, 0.1)",
        borderRadius: "4px",
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 310,
        height: 40,
      }}
    >
      <IconButton type="button" sx={{ p: "" }} aria-label="search">
        <SearchIcon sx={{ fill: "#aab0b4 !important" }} />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1, color: "#a7a7a9" }}
        placeholder="Search & Filter"
        inputProps={{ "aria-label": "search google maps" }}
      />
    </Paper>
  );
}
