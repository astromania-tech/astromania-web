import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  useTheme,
  useMediaQuery,
  Chip,
} from "@mui/material";
import {
  RocketLaunch,
  AutoAwesome,
  CloudQueue,
  Architecture,
} from "@mui/icons-material";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const specialties = [
    { icon: <RocketLaunch />, label: "DevOps Excellence" },
    { icon: <AutoAwesome />, label: "AI Solutions" },
    { icon: <CloudQueue />, label: "Scalable Architecture" },
    { icon: <Architecture />, label: "Software Development" },
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: `linear-gradient(135deg,
          ${theme.palette.background.default} 0%,
          ${theme.palette.primary.light}15 50%,
          ${theme.palette.secondary.light}10 100%)`,
        position: "relative",
        overflow: "hidden",
        pt: 8,
      }}
    >
      {/* Background Animation */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(circle at 20% 80%, ${theme.palette.primary.main}15 0%, transparent 50%),
                      radial-gradient(circle at 80% 20%, ${theme.palette.secondary.main}15 0%, transparent 50%),
                      radial-gradient(circle at 40% 40%, ${theme.palette.info.main}10 0%, transparent 50%)`,
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <motion.div variants={fadeInUp}>
                <Chip
                  label="Enterprise Software Solutions"
                  sx={{
                    mb: 3,
                    backgroundColor: theme.palette.primary.light + "20",
                    color: theme.palette.primary.main,
                    fontWeight: 600,
                    fontSize: "0.875rem",
                  }}
                />
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Typography
                  variant="h1"
                  component="h1"
                  sx={{
                    fontWeight: 800,
                    mb: 2,
                    background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontSize: isMobile ? "2.5rem" : "3.5rem",
                    lineHeight: 1.1,
                  }}
                >
                  AstroMANIA
                  <br />
                  Enterprise
                </Typography>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Typography
                  variant="h5"
                  component="h2"
                  sx={{
                    mb: 3,
                    color: theme.palette.text.secondary,
                    fontWeight: 400,
                    lineHeight: 1.6,
                  }}
                >
                  Developing scalable software solutions using cutting-edge AI
                  to solve complex enterprise challenges with DevOps excellence.
                </Typography>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Typography
                  variant="body1"
                  sx={{
                    mb: 4,
                    color: theme.palette.text.secondary,
                    fontSize: "1.125rem",
                    lineHeight: 1.8,
                  }}
                >
                  Transform your business with our innovative approach to
                  software development, where artificial intelligence meets
                  robust DevOps practices to deliver enterprise-grade solutions.
                </Typography>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Box sx={{ display: "flex", gap: 2, mb: 4, flexWrap: "wrap" }}>
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      px: 4,
                      py: 1.5,
                      fontSize: "1.1rem",
                      background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
                      "&:hover": {
                        background: `linear-gradient(45deg, ${theme.palette.primary.dark} 30%, ${theme.palette.secondary.dark} 90%)`,
                        transform: "translateY(-2px)",
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    Start Your Project
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    sx={{
                      px: 4,
                      py: 1.5,
                      fontSize: "1.1rem",
                      borderColor: theme.palette.primary.main,
                      color: theme.palette.primary.main,
                      "&:hover": {
                        backgroundColor: theme.palette.primary.main + "08",
                        transform: "translateY(-2px)",
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    View Our Solutions
                  </Button>
                </Box>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
                  {specialties.map((specialty, index) => (
                    <Chip
                      key={index}
                      icon={specialty.icon}
                      label={specialty.label}
                      variant="outlined"
                      sx={{
                        borderColor: theme.palette.primary.main + "40",
                        color: theme.palette.primary.main,
                        "&:hover": {
                          backgroundColor: theme.palette.primary.main + "10",
                        },
                      }}
                    />
                  ))}
                </Box>
              </motion.div>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <motion.div
                variants={fadeInUp}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <Box
                  sx={{
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: isMobile ? "300px" : "500px",
                  }}
                >
                  {/* Animated circles */}
                  <motion.div
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    style={{
                      position: "absolute",
                      width: "200px",
                      height: "200px",
                      border: `2px solid ${theme.palette.primary.main}40`,
                      borderRadius: "50%",
                      borderTop: `2px solid ${theme.palette.primary.main}`,
                    }}
                  />
                  <motion.div
                    animate={{
                      rotate: -360,
                    }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    style={{
                      position: "absolute",
                      width: "300px",
                      height: "300px",
                      border: `2px solid ${theme.palette.secondary.main}40`,
                      borderRadius: "50%",
                      borderRight: `2px solid ${theme.palette.secondary.main}`,
                    }}
                  />

                  {/* Central icon */}
                  <Box
                    sx={{
                      width: 120,
                      height: 120,
                      backgroundColor: theme.palette.primary.main,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: `0 8px 32px ${theme.palette.primary.main}40`,
                    }}
                  >
                    <RocketLaunch sx={{ fontSize: 60, color: "white" }} />
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default HeroSection;
