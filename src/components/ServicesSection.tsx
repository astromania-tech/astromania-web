import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  IconButton,
  useTheme,
} from "@mui/material";
import {
  CloudQueue,
  AutoAwesome,
  Security,
  Speed,
  Architecture,
  Analytics,
  DeviceHub,
} from "@mui/icons-material";
import { motion } from "framer-motion";

interface Service {
  icon: React.ReactElement;
  title: string;
  description: string;
  features: string[];
}

const ServicesSection: React.FC = () => {
  const theme = useTheme();

  const services: Service[] = [
    {
      icon: <AutoAwesome />,
      title: "AI-Powered Solutions",
      description:
        "Leverage cutting-edge artificial intelligence to solve complex business challenges and automate processes.",
      features: [
        "Machine Learning",
        "Natural Language Processing",
        "Computer Vision",
        "Predictive Analytics",
      ],
    },
    {
      icon: <CloudQueue />,
      title: "DevOps Excellence",
      description:
        "Streamline your development lifecycle with robust CI/CD pipelines and cloud-native solutions.",
      features: [
        "CI/CD Automation",
        "Container Orchestration",
        "Infrastructure as Code",
        "Monitoring & Logging",
      ],
    },
    {
      icon: <Architecture />,
      title: "Scalable Architecture",
      description:
        "Design and implement enterprise-grade architectures that grow with your business needs.",
      features: [
        "Microservices",
        "Event-Driven Architecture",
        "API Gateway",
        "Load Balancing",
      ],
    },
    {
      icon: <Security />,
      title: "Security & Compliance",
      description:
        "Implement robust security measures and ensure compliance with industry standards.",
      features: [
        "Zero Trust Security",
        "Compliance Automation",
        "Threat Detection",
        "Data Encryption",
      ],
    },
    {
      icon: <Speed />,
      title: "Performance Optimization",
      description:
        "Optimize your applications for maximum performance and user experience.",
      features: [
        "Code Optimization",
        "Database Tuning",
        "Caching Strategies",
        "Performance Monitoring",
      ],
    },
    {
      icon: <Analytics />,
      title: "Data Analytics",
      description:
        "Transform your data into actionable insights with advanced analytics and visualization.",
      features: [
        "Real-time Analytics",
        "Data Visualization",
        "Business Intelligence",
        "Predictive Modeling",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: `linear-gradient(180deg,
          ${theme.palette.background.default} 0%,
          ${theme.palette.background.paper} 100%)`,
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <motion.div variants={itemVariants}>
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Our Services
              </Typography>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Typography
                variant="h5"
                sx={{
                  color: theme.palette.text.secondary,
                  maxWidth: "600px",
                  mx: "auto",
                  lineHeight: 1.6,
                }}
              >
                Comprehensive technology solutions designed to accelerate your
                digital transformation journey
              </Typography>
            </motion.div>
          </Box>

          {/* Services Grid */}
          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid size={{ xs: 12, md: 6, lg: 4 }} key={index}>
                <motion.div variants={itemVariants}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      transition: "all 0.3s ease-in-out",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: `0 12px 40px ${theme.palette.primary.main}20`,
                      },
                    }}
                  >
                    <CardContent sx={{ p: 4, flexGrow: 1 }}>
                      {/* Service Icon */}
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: 80,
                          height: 80,
                          borderRadius: "50%",
                          background: `linear-gradient(45deg, ${theme.palette.primary.main}20 30%, ${theme.palette.secondary.main}20 90%)`,
                          mb: 3,
                          mx: "auto",
                        }}
                      >
                        <IconButton
                          sx={{
                            color: theme.palette.primary.main,
                            fontSize: "2rem",
                          }}
                        >
                          {service.icon}
                        </IconButton>
                      </Box>

                      {/* Service Title */}
                      <Typography
                        variant="h5"
                        component="h3"
                        sx={{
                          fontWeight: 600,
                          mb: 2,
                          textAlign: "center",
                          color: theme.palette.text.primary,
                        }}
                      >
                        {service.title}
                      </Typography>

                      {/* Service Description */}
                      <Typography
                        variant="body1"
                        sx={{
                          color: theme.palette.text.secondary,
                          mb: 3,
                          textAlign: "center",
                          lineHeight: 1.6,
                        }}
                      >
                        {service.description}
                      </Typography>

                      {/* Service Features */}
                      <Box sx={{ mt: "auto" }}>
                        {service.features.map((feature, featureIndex) => (
                          <Box
                            key={featureIndex}
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              mb: 1,
                            }}
                          >
                            <Box
                              sx={{
                                width: 6,
                                height: 6,
                                borderRadius: "50%",
                                backgroundColor: theme.palette.primary.main,
                                mr: 2,
                              }}
                            />
                            <Typography
                              variant="body2"
                              sx={{
                                color: theme.palette.text.secondary,
                                fontSize: "0.875rem",
                              }}
                            >
                              {feature}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          {/* Call to Action */}
          <motion.div variants={itemVariants}>
            <Box
              sx={{
                textAlign: "center",
                mt: 8,
                p: 6,
                borderRadius: 3,
                background: `linear-gradient(135deg, ${theme.palette.primary.main}10 0%, ${theme.palette.secondary.main}10 100%)`,
                border: `1px solid ${theme.palette.primary.main}20`,
              }}
            >
              <DeviceHub
                sx={{
                  fontSize: 48,
                  color: theme.palette.primary.main,
                  mb: 2,
                }}
              />
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 600,
                  mb: 2,
                  color: theme.palette.text.primary,
                }}
              >
                Ready to Transform Your Business?
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.text.secondary,
                  mb: 3,
                  maxWidth: "500px",
                  mx: "auto",
                }}
              >
                Let's discuss how our expertise can help you achieve your
                technology goals and drive innovation in your organization.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
                    border: "none",
                    borderRadius: "8px",
                    color: "white",
                    padding: "12px 32px",
                    fontSize: "1rem",
                    fontWeight: 500,
                    cursor: "pointer",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  }}
                >
                  Get Started Today
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    background: "transparent",
                    border: `2px solid ${theme.palette.primary.main}`,
                    borderRadius: "8px",
                    color: theme.palette.primary.main,
                    padding: "10px 32px",
                    fontSize: "1rem",
                    fontWeight: 500,
                    cursor: "pointer",
                  }}
                >
                  Learn More
                </motion.button>
              </Box>
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ServicesSection;
