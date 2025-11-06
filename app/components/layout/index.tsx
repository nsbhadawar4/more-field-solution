"use client";

import React from "react";
import Header from "../header";
import { Box } from "@mui/material";
import { IcustomComponent } from "../interfaces/interface";
import Footer from "../footer/footer";

function Layout({ children }: IcustomComponent) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      minHeight="100vh"
      sx={{ backgroundColor: "#fafafa" }}
    >
      {/* Header/Navbar */}
      <Header />

      {/* Main Content */}
      <Box component="main" flexGrow={1}>
        {children}
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
}

export default Layout;
