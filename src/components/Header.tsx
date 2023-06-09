import * as React from "react";
import {
  Stack,
  MenuItem,
  Divider,
  Tooltip,
  Avatar,
  Container,
  Menu,
  Typography,
  IconButton,
  Toolbar,
  Box,
  AppBar,
} from "@mui/material";

import { ReactComponent as LogoIcon } from "../assets/logo.svg";
import { ReactComponent as CartIcon } from "../assets/cart.svg";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Header() {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Stack direction="row" spacing={2}>
            <LogoIcon />
            <Divider orientation="vertical" variant="middle" flexItem />
            <CartIcon />
          </Stack>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              padding: "12px 24px 12px 24px",
              display: { xs: "none", md: "flex" },
              textDecoration: "none",
              letterSpacing: "normal",
              color: "#307fc1",
              lineHeight: 1.2,
              fontSize: "20px",
              fontWeight: 300,
              fontStretch: "normal",
              fontStyle: "normal",
            }}
          >
            IAM SHOP
          </Typography>
          <Box
            sx={{
              flexGrow: 2,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            <Tooltip title="Open settings">
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{ p: 0, "&:hover": { backgroundColor: "transparent" } }}
              >
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                <Typography
                  sx={{
                    p: 2,
                    fontStyle: "normal",
                    fontStretch: "normal",
                    letterSpacing: "normal",
                    color: "#919193",
                    lineHeight: 1.14,
                    fontSize: "14px",
                    fontWeight: "normal",
                  }}
                >
                  Patrik Parker
                </Typography>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting, index) => (
                <MenuItem key={index} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
