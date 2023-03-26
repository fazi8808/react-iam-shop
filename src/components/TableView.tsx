import * as React from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  Paper,
  Pagination,
} from "@mui/material";

import { visuallyHidden } from "@mui/utils";
import Button from "@mui/material/Button";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Details from "./Details";

interface Data {
  friendlyName: string;
  dnsName: string;
  environment: string;
  endDate: string;
  action: string;
}

function createData(
  friendlyName: string,
  dnsName: string,
  environment: string,
  endDate: string,
  action: string
): Data {
  return {
    endDate,
    friendlyName,
    environment,
    dnsName,
    action,
  };
}

const rows = [
  createData(
    "Friendly Name",
    "DNS Name",
    "Environment",
    "21/11/2021, 02:33am",
    "Details"
  ),
  createData(
    "Friendly Name",
    "DNS Name",
    "Environment",
    "21/11/2021, 02:33am",
    "Details"
  ),
  createData(
    "Friendly Name",
    "DNS Name",
    "Environment",
    "21/11/2021, 02:33am",
    "Details"
  ),
  createData(
    "Friendly Name",
    "DNS Name",
    "Environment",
    "21/11/2021, 02:33am",
    "Details"
  ),
  createData(
    "Friendly Name",
    "DNS Name",
    "Environment",
    "21/11/2021, 02:33am",
    "Details"
  ),
  createData(
    "Friendly Name",
    "DNS Name",
    "Environment",
    "21/11/2021, 02:33am",
    "Details"
  ),
  createData(
    "Friendly Name",
    "DNS Name",
    "Environment",
    "21/11/2021, 02:33am",
    "Details"
  ),
  createData(
    "Friendly Name",
    "DNS Name",
    "Environment",
    "21/11/2021, 02:33am",
    "Details"
  ),
  createData(
    "Friendly Name",
    "DNS Name",
    "Environment",
    "21/11/2021, 02:33am",
    "Details"
  ),
  createData(
    "Friendly Name",
    "DNS Name",
    "Environment",
    "21/11/2021, 02:33am",
    "Details"
  ),
  createData(
    "Friendly Name",
    "DNS Name",
    "Environment",
    "21/11/2021, 02:33am",
    "Details"
  ),
  createData(
    "Friendly Name",
    "DNS Name",
    "Environment",
    "21/11/2021, 02:33am",
    "Details"
  ),
  createData(
    "Friendly Name",
    "DNS Name",
    "Environment",
    "21/11/2021, 02:33am",
    "Details"
  ),
];

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = "asc" | "desc";

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string }
) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort<T>(
  array: readonly T[],
  comparator: (a: T, b: T) => number
) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: "friendlyName",
    numeric: true,
    disablePadding: false,
    label: "Friendly Name",
  },
  {
    id: "dnsName",
    numeric: true,
    disablePadding: false,
    label: "DNS Name",
  },
  {
    id: "environment",
    numeric: true,
    disablePadding: false,
    label: "Environment",
  },
  {
    id: "endDate",
    numeric: false,
    disablePadding: false,
    label: "End Date",
  },
  {
    id: "action",
    numeric: false,
    disablePadding: false,
    label: "Action",
  },
];

interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler =
    (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead sx={{ backgroundColor: "#fbfbfd", color: "#7d7c7c" }}>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align="center"
            sortDirection={orderBy === headCell.id ? order : false}
            sx={{ fontSize: "13px" }}
          >
            <TableSortLabel
              active={true}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
              sx={{ backgroundColor: "#fbfbfd", color: "#7d7c7c" }}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default function TableView() {
  const [open, setOpen] = React.useState(false);

  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<keyof Data>("friendlyName");
  const [selected, setSelected] = React.useState<readonly string[]>([]);
  const [page, setPage] = React.useState(0);

  const [rowsPerPage] = React.useState(10);

  const close = () => {
    setOpen(!open);
  };

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.endDate);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  return (
    <Box sx={{ flexGrow: 1, mt: 2.5 }}>
      <Paper sx={{ mb: 2 }}>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={"medium"}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody sx={{ backgroundColor: "#fff", fontSize: "13px" }}>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  // const isItemSelected = isSelected(row.endDate);

                  return (
                    <TableRow hover tabIndex={-1} key={index}>
                      <TableCell
                        sx={{ fontSize: "13px", color: "#282828" }}
                        align="center"
                      >
                        {row.friendlyName}
                      </TableCell>
                      <TableCell
                        sx={{ fontSize: "13px", color: "#282828" }}
                        align="center"
                      >
                        {row.dnsName}
                      </TableCell>
                      <TableCell
                        sx={{ fontSize: "13px", color: "#282828" }}
                        align="center"
                      >
                        {row.environment}
                      </TableCell>
                      <TableCell
                        sx={{ fontSize: "13px", color: "#282828" }}
                        align="center"
                      >
                        {row.endDate}
                      </TableCell>
                      <TableCell
                        sx={{ fontSize: "13px", color: "#282828" }}
                        align="center"
                      >
                        {" "}
                        <Button
                          onClick={() => setOpen(!open)}
                          sx={{
                            backgroundColor: "#01ae8f",
                            border: "solid 1px #01ae8f",
                            borderRadius: "4px",
                            color: "#fff",
                          }}
                          variant="contained"
                        >
                          {row.action}
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })}
              {/* {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 53 * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )} */}
            </TableBody>
          </Table>
        </TableContainer>

        <Pagination
          sx={{ p: 3 }}
          hidePrevButton={page === 1}
          hideNextButton={page === Math.ceil(rows.length / 10)}
          boundaryCount={2}
          defaultPage={0}
          // onChange={handleChangePage}
          page={page}
          count={Math.ceil(rows.length / 10)}
          variant="outlined"
          shape="rounded"
        />
      </Paper>
      <SwipeableDrawer
        anchor={"right"}
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        sx={{ background: "transparent" }}
      >
        <Details close={close} />
      </SwipeableDrawer>
    </Box>
  );
}
