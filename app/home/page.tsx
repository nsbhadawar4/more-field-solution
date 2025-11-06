"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Stack,
} from "@mui/material";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import OpacityIcon from "@mui/icons-material/Opacity";
import HandymanIcon from "@mui/icons-material/Handyman";
import GrassIcon from "@mui/icons-material/Grass";
import SpaIcon from "@mui/icons-material/Spa";
import IMAGES from "../assets/images";
import CostumeButton from "../components/button";

interface Service {
  title: string;
  price: number;
  unit: string;
  description: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    title: "Jutai",
    price: 300,
    unit: "per beegha",
    description: "Professional plowing service for soil preparation",
    icon: <HandymanIcon />,
  },
  {
    title: "Gehu ki Katai",
    price: 800,
    unit: "per hour",
    description: "Efficient wheat harvesting with modern equipment",
    icon: <GrassIcon />,
  },
  {
    title: "Fasal Bichai",
    price: 500,
    unit: "per beegha",
    description: "Precise crop sowing for optimal growth",
    icon: <SpaIcon />,
  },
  {
    title: "Pani ki Sichaai",
    price: 100,
    unit: "per hour",
    description: "Irrigation services for healthy crop yield",
    icon: <OpacityIcon />,
  },
  {
    title: "Hal Chalana",
    price: 250,
    unit: "per beegha",
    description: "Traditional plowing with modern tractors",
    icon: <AgricultureIcon />,
  },
];

const HomePage = () => {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          height: { xs: 500, md: 600 },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <Image
          src={IMAGES.Homebanner}
          alt="Tractor in farmland"
          fill
          style={{ objectFit: "cover", zIndex: 0 }}
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.4), rgba(0,0,0,0.6))",
            zIndex: 1,
          }}
        />
        <Container sx={{ zIndex: 2, textAlign: "center", color: "white" }}>
          <Typography
            variant="h1"
            sx={{
              color: "#fff",
            }}
          >
            Empowering Farmers with Modern Tractor Solutions
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "#fff",
              my: 2,
            }}
          >
            Affordable, reliable, and efficient tractor services for every
            farmer
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            justifyContent="center"
          >
            <CostumeButton
              className="primaryBtn"
              component={Link}
              href="/contact"
              stylesRest={{ height: "50px !important" }}
            >
              Book a Service
            </CostumeButton>
            <Button
              variant="outlined"
              size="large"
              component={Link}
              href="/about"
              sx={{
                px: 5,
                borderRadius: 2,
                color: "white",
                borderColor: "white",
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.2)",
                  borderColor: "white",
                },
              }}
            >
              Learn More
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* Services Section */}
      <Box sx={{ py: 10, backgroundColor: "rgba(0,0,0,0.03)" }}>
        <Container>
          <Box textAlign="center" mb={6}>
            <Typography variant="h2" mb={2}>
              Our Tractor Services
            </Typography>
            <Typography variant="h5">
              Professional farming services with modern tractors at competitive
              prices
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {services.map((service, index) => (
              <Grid size={{ xs: 12, md: 4 }} key={service.title}>
                <Card
                  sx={{
                    height: "100%",
                    borderRadius: 3,
                    boxShadow: 3,
                    p: 2,
                    transition: "transform 0.3s ease",
                    "&:hover": { transform: "translateY(-5px)" },
                    animation: "scaleIn 0.6s ease forwards",
                    animationDelay: `${index * 0.1}s`,
                    "@keyframes scaleIn": {
                      from: { opacity: 0, transform: "scale(0.95)" },
                      to: { opacity: 1, transform: "scale(1)" },
                    },
                  }}
                >
                  <CardContent>
                    <Stack direction={"row"} spacing={1}>
                      <Box mb={2} sx={{ color: "#489D56" }}>
                        {service.icon}
                      </Box>
                      <Typography variant="h5">{service.title}</Typography>
                    </Stack>
                    <Typography variant="h6" sx={{ mt: 1, mb: 1 }}>
                      <span style={{ color: "#489D56" }}>₹{service.price}</span>
                      {service.unit}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          py: 10,
          background: "#EBF4FF",
          textAlign: "center",
          mb: 4,
        }}
      >
        <Container>
          <Typography variant="h4" fontWeight={700} mb={2}>
            Ready to Get Started?
          </Typography>
          <Typography variant="h6" mb={4} sx={{ opacity: 0.9 }}>
            Contact us today to book your tractor service
          </Typography>
          <CostumeButton
            className="primaryBtn"
            component={Link}
            href="/contact"
            stylesRest={{ width: "200px !important" }}
          >
            Contact Us
          </CostumeButton>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;
