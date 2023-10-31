import React from "react";
import { styled, alpha } from "@mui/material/styles";
import { AppBar, Box, Toolbar, InputBase, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import SearchIcon from "@mui/icons-material/Search";
import "./NavBar.css";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "1rem",
  backgroundColor: alpha("#000", 0.35),
  "&:hover": {
    backgroundColor: alpha("#000", 0.45),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0.1, 1),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(3)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "32ch",
      "&:focus": {
        width: "60ch",
      },
    },
  },
}));

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 2, color: "#357a38" }}>
      <AppBar position="static" sx={{ backgroundColor: "#03a9f4" }}>
        <Toolbar>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}>
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
              MarAbierto
            </Link>
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Typography
            variant="button"
            noWrap
            component={Link}
            to="/category/Peaceful Groupies"
            sx={{
              textDecoration: "none",
              color: "white",
              backgroundColor: "#03a9f4",
              padding: "10px 20px",
              borderRadius: "4px",
              display: "inline-block",
            }}>
            Peaceful Groupies
          </Typography>
          <Typography
            variant="button"
            noWrap
            component={Link}
            to="/category/Bored Ape Yacht Club"
            sx={{
              textDecoration: "none",
              color: "white",
              backgroundColor: "#03a9f4",
              padding: "10px 20px",
              borderRadius: "4px",
              display: "inline-block",
            }}>
            Bored Ape Yacht Club
          </Typography>
          <Box sx={{ flexGrow: 0.1 }} />
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Busca colecciones y artistas"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ flexGrow: 0.1 }} />
          <Typography
            variant="button"
            noWrap
            component={Link}
            to="/category/Azuki"
            sx={{
              textDecoration: "none",
              color: "white",
              backgroundColor: "#03a9f4",
              padding: "10px 20px",
              borderRadius: "4px",
              display: "inline-block",
            }}>
            Azuki
          </Typography>
          <Typography
            variant="button"
            noWrap
            component={Link}
            to="/category/Nakamigos"
            sx={{
              textDecoration: "none",
              color: "white",
              backgroundColor: "#03a9f4",
              padding: "10px 20px",
              borderRadius: "4px",
              display: "inline-block",
            }}>
            Nakamigos
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <CartWidget />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
