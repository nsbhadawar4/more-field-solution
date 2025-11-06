"use client";
import {
  Box,
  Grid,
  Typography,
  Paper,
  Divider,
  Container,
} from "@mui/material";
import { Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "../components/contact-form/form";
import CustomCard from "../components/custom-card";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone size={24} />,
      label: "Phone",
      value: "+91 98765 43210",
    },
    {
      icon: <Mail size={24} />,
      label: "Email",
      value: "nsbhadawar@gmail.com",
    },
    {
      icon: <MapPin size={24} />,
      label: "Address",
      value: "Village Road, District, State",
    },
  ];
  return (
    <Container>
      <Box sx={{ py: 8 }}>
        {/* Header Section */}
        <Box textAlign="center" mb={6}>
          <Typography variant="h1">Book at Tractor Services</Typography>
          <Typography variant="h6">
            Fill out the form below to book a service or ask for more
            information
          </Typography>
        </Box>

        {/* Grid Layout */}
        <Grid container spacing={4}>
          {/* ✅ Contact Form */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                borderRadius: 3,
                bgcolor: "background.paper",
              }}
            >
              <ContactForm />
            </Paper>
          </Grid>

          {/* Contact Info Section */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box display="flex" flexDirection="column" gap={3}>
              <CustomCard
                styleRest={{
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    border: "1px solid #489D56",
                    transform: "translateY(-5px)",
                    transition: "transform 0.4s ease",
                  },
                }}
              >
                <Typography variant="h3" mb={3}>
                  Contact Information
                </Typography>

                <Box display="flex" flexDirection="column" gap={3}>
                  {contactInfo.map((item, index) => (
                    <Box
                      key={index}
                      display="flex"
                      alignItems="flex-start"
                      gap={2}
                    >
                      <Box
                        sx={{
                          bgcolor: "#489D56",
                          color: "white",
                          borderRadius: 100,
                          width: "50px",
                          height: "50px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {item.icon}
                      </Box>
                      <Box>
                        <Typography fontWeight="bold">{item.label}</Typography>
                        <Typography color="text.secondary">
                          {item.value}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </CustomCard>

              {/* Business Hours */}
              <Paper
                variant="outlined"
                sx={{
                  p: 4,
                  borderRadius: 3,
                  borderColor: "#489D56",
                  bgcolor: "#F5F9F5",
                }}
              >
                <Typography variant="h3" mb={2}>
                  Business Hours
                </Typography>

                <Box>
                  <Box display="flex" justifyContent="space-between" mb={1.5}>
                    <Typography>Monday - Saturday</Typography>
                    <Typography fontWeight="bold">6:00 AM - 8:00 PM</Typography>
                  </Box>

                  <Divider sx={{ my: 1 }} />

                  <Box display="flex" justifyContent="space-between" mt={1.5}>
                    <Typography>Sunday</Typography>
                    <Typography fontWeight="bold">7:00 AM - 6:00 PM</Typography>
                  </Box>
                </Box>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Contact;
