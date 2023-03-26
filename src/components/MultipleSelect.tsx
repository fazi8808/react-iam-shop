import * as React from "react";
import { Theme, useTheme } from "@mui/material/styles";
import {
  FormControl,
  MenuItem,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = ["All", "One-Time Access", "Pre-Approved"];

function getStyles(name: string, personName: string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelect() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <FormControl sx={{ m: 2, width: "90%" }}>
      <InputLabel id="demo-multiple-name-label">All</InputLabel>
      <Select
        labelId="demo-multiple-name-label"
        id="demo-multiple-name"
        // multiple
        value={personName}
        onChange={handleChange}
        input={<OutlinedInput label="All" />}
        MenuProps={MenuProps}
      >
        {names.map((name, index) => (
          <MenuItem
            key={index}
            value={name}
            style={getStyles(name, personName, theme)}
          >
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
