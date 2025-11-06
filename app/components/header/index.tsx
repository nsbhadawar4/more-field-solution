"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import CostumeButton from "../button";

const Header = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/home" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => pathname === path;

  const toggleDrawer = (state: boolean) => setOpen(state);

  return (
    <>
      {/* Navbar */}
      <AppBar
        position="sticky"
        color="inherit"
        elevation={1}
        sx={{
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid #e0e0e0",
          py: 0.8,
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Box display="flex" alignItems="center" gap={1}>
              <AgricultureIcon sx={{ color: "#489D56", fontSize: "30px" }} />
              <Typography variant="h5" fontWeight={700} color="#489D56">
                Tractor Services
              </Typography>
            </Box>
          </Link>

          {/* Desktop Links */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 4,
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                style={{
                  textDecoration: "none",
                  color: isActive(link.path) ? "#489D56" : "inherit",
                  borderBottom: isActive(link.path)
                    ? "2px solid #489D56"
                    : "2px solid #FFFFFF",
                  fontWeight: 500,
                  fontSize: "1rem",
                }}
              >
                {link.name}
              </Link>
            ))}

            <CostumeButton
              className="primaryBtn"
              component={Link}
              href="/contact"
            >
              Book Now
            </CostumeButton>
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            color="inherit"
            edge="end"
            onClick={() => toggleDrawer(true)}
            sx={{ display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="top"
        open={open}
        onClose={() => toggleDrawer(false)}
        PaperProps={{
          sx: {
            pt: 2,
            pb: 4,
            px: 3,
            backdropFilter: "blur(10px)",
          },
        }}
      >
        {/* Close button inside drawer */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6" fontWeight={700}>
            Menu
          </Typography>
          <IconButton onClick={() => toggleDrawer(false)}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Divider sx={{ my: 2 }} />

        <List sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          {navLinks.map((link) => (
            <ListItem key={link.path} disablePadding>
              <ListItemButton
                component={Link}
                href={link.path}
                onClick={() => toggleDrawer(false)}
              >
                <ListItemText
                  primary={link.name}
                  primaryTypographyProps={{
                    color: isActive(link.path) ? "primary" : "textPrimary",
                    fontWeight: 500,
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}

          <Button
            variant="contained"
            color="primary"
            fullWidth
            component={Link}
            href="/contact"
            onClick={() => toggleDrawer(false)}
            sx={{ mt: 2, borderRadius: 2, textTransform: "none" }}
          >
            Book Now
          </Button>
        </List>
      </Drawer>
    </>
  );
};

export default Header;
