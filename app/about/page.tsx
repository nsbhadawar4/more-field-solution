"use client";

import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import Image from "next/image";
import IMAGES from "../assets/images";
import CustomCard from "../components/custom-card";

const About = () => {
  const featureItems = [
    {
      icon: "🚜",
      title: "Modern Equipment",
      desc: "Latest tractors and farming machinery for efficient work",
    },
    {
      icon: "💰",
      title: "Affordable Pricing",
      desc: "Competitive rates without compromising on quality",
    },
    {
      icon: "⚡",
      title: "Quick Service",
      desc: "Fast response time and timely completion of work",
    },
  ];
  return (
    <Box component="section" sx={{ minHeight: "100vh", py: 8 }}>
      <Container maxWidth="lg">
        {/* Page Header */}
        <Box textAlign="center" mb={10}>
          <Typography variant="h1">About Us</Typography>
          <Typography variant="h6">
            Your trusted partner in modern farming solutions
          </Typography>
        </Box>

        {/* Content Section */}
        <Grid container spacing={6} alignItems="center">
          {/* Image */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Image
              src={IMAGES.About}
              alt="Tractor in farmland"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "500px",
              }}
            />
          </Grid>

          {/* Text Content */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box>
              <Typography variant="h3" gutterBottom>
                Empowering Agriculture Through Technology
              </Typography>

              <Typography
                variant="body1"
                color="text.primary"
                paragraph
                sx={{ lineHeight: 1.8 }}
              >
                We provide efficient, reliable, and affordable tractor services
                to support modern farming needs. Our mission is to make
                agriculture easier, faster, and more productive for farmers.
              </Typography>

              <Typography
                variant="body1"
                color="text.primary"
                paragraph
                sx={{ lineHeight: 1.8 }}
              >
                With years of experience in agricultural services, we understand
                the challenges farmers face. That's why we've invested in modern
                tractors and equipment to deliver the best possible service at
                competitive prices.
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Why Choose Us Section */}
        <Grid container spacing={4} mt={5}>
          {featureItems.map((item, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
              <CustomCard
                styleRest={{
                  textAlign: "center",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                  },
                }}
              >
                <Box>
                  <Typography variant="h3" mb={2}>
                    {item.icon}
                  </Typography>
                  <Typography variant="h5" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ fontSize: "14px" }}
                    color="text.secondary"
                  >
                    {item.desc}
                  </Typography>
                </Box>
              </CustomCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
