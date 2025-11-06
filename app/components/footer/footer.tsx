"use client";
import { Box, Typography, Grid, Divider, Container } from "@mui/material";
import { Mail, MapPin, Phone } from "lucide-react";
import AgricultureIcon from "@mui/icons-material/Agriculture";

const Footer = () => {
  return (
    <Box
      sx={{
        background: "#489D56",
        color: "#fff",
        mt: "auto",
        pt: 5,
        pb: 1.4,
      }}
    >
      <Container>
        {/* Main Grid */}
        <Grid container spacing={6}>
          {/* Brand Section */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box display="flex" alignItems="center" gap={1} mb={2}>
              <AgricultureIcon sx={{ fontSize: 28, color: "#fff" }} />
              <Typography variant="h6" fontWeight="bold">
                Tractor Services
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.8)" }}>
              Empowering farmers with modern tractor solutions. Affordable,
              reliable, and efficient services.
            </Typography>
          </Grid>

          {/* Contact Info */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" fontWeight="600" mb={2}>
              Contact Us
            </Typography>
            <Box display="flex" flexDirection="column" gap={1.5}>
              <Box display="flex" alignItems="center" gap={1}>
                <Phone size={18} />
                <Typography variant="body2">+91 98765 43210</Typography>
              </Box>
              <Box display="flex" alignItems="center" gap={1}>
                <Mail size={18} />
                <Typography variant="body2">nsbhadawar@gmail.com</Typography>
              </Box>
              <Box display="flex" alignItems="center" gap={1}>
                <MapPin size={18} />
                <Typography variant="body2">
                  Village Road, District, State
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Services */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" fontWeight="600" mb={2}>
              Services
            </Typography>
            <Box
              component="ul"
              sx={{
                listStyle: "none",
                pl: 0,
                m: 0,
                color: "rgba(255,255,255,0.8)",
              }}
            >
              {[
                "Jutai",
                "Gehu ki Katai",
                "Fasal Bichai",
                "Pani ki Sichaai",
                "Hal Chalana",
              ].map((service) => (
                <Typography
                  component="li"
                  key={service}
                  variant="body2"
                  sx={{ mb: 0.5 }}
                >
                  {service}
                </Typography>
              ))}
            </Box>
          </Grid>
        </Grid>

        {/* Divider & Bottom Text */}
        <Divider sx={{ my: 2, borderColor: "rgba(255,255,255,0.2)" }} />
        <Typography
          variant="h6"
          align="center"
          sx={{ color: "rgba(255,255,255,0.8)" }}
        >
          © 2025 Tractor Farming Services. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
