import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  Chip,
} from "@mui/material";
import {
  RocketLaunch,
  AutoAwesome,
  CloudQueue,
  Architecture,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import {
  useTheme as useCustomTheme,
  useThemedStyles,
} from "../hooks/useTheme";

const HeroSection: React.FC = () => {
  const { colors } = useCustomTheme();
  const themedStyles = useThemedStyles();
  // const isMobile = useMediaQuery(theme.breakpoints.down("md"));
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

  const stats = [
    { value: "500+", label: "Projects Delivered" },
    { value: "50+", label: "Enterprise Clients" },
    { value: "99.9%", label: "Uptime Guarantee" },
    { value: "24/7", label: "Expert Support" },
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        backgroundColor: themedStyles.getMatteBackground("primary"),
        position: "relative",
        pt: 10,
        pb: 8,
      }}
    >
      {/* Subtle background pattern */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.03,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23${colors.deepBlue.replace("#", "")}' fill-opacity='1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <motion.div variants={fadeInUp}>
                <Chip
                  label="Enterprise Software Solutions"
                  sx={{
                    mb: 3,
                    backgroundColor: colors.lightGray,
                    color: colors.deepBlue,
                    fontWeight: 600,
                    fontSize: "0.875rem",
                    border: `1px solid ${colors.silver}`,
                    fontFamily: '"Open Sauce Sans", sans-serif',
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
                    color: themedStyles.getTextColor("primary"),
                    fontSize: { xs: "2.5rem", md: "3.5rem" },
                    lineHeight: 1.1,
                    fontFamily: '"Open Sauce One", sans-serif',
                    letterSpacing: "-0.02em",
                  }}
                >
                  AstroMANIA
                  <br />
                  <Box
                    component="span"
                    sx={{
                      color: colors.accentBlue,
                      position: "relative",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        height: "3px",
                        backgroundColor: colors.accentBlue,
                        borderRadius: "2px",
                      },
                    }}
                  >
                    Enterprise
                  </Box>
                </Typography>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Typography
                  variant="h5"
                  component="h2"
                  sx={{
                    mb: 3,
                    color: themedStyles.getTextColor("secondary"),
                    fontWeight: 400,
                    lineHeight: 1.6,
                    fontFamily: '"Open Sauce Sans", sans-serif',
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
                    color: themedStyles.getTextColor("secondary"),
                    fontSize: "1.125rem",
                    lineHeight: 1.8,
                    fontFamily: '"Open Sauce Sans", sans-serif',
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
                      ...themedStyles.buttonStyle.primary,
                      fontSize: "1.1rem",
                      fontFamily: '"Open Sauce Sans", sans-serif',
                    }}
                  >
                    Start Your Project
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    sx={{
                      ...themedStyles.buttonStyle.secondary,
                      fontSize: "1.1rem",
                      fontFamily: '"Open Sauce Sans", sans-serif',
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
                        borderColor: themedStyles.getBorderColor(),
                        color: themedStyles.getTextColor("primary"),
                        backgroundColor:
                          themedStyles.getMatteBackground("secondary"),
                        fontFamily: '"Open Sauce Sans", sans-serif',
                        "&:hover": {
                          backgroundColor: colors.lightGray,
                          borderColor: themedStyles.getBorderColor("hover"),
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
                    flexDirection: "column",
                    gap: 3,
                    height: { xs: "400px", md: "500px" },
                  }}
                >
                  {/* Main hero card */}
                  <Card
                    sx={{
                      ...themedStyles.cardStyle,
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      background: themedStyles.getMatteBackground("elevated"),
                      border: `2px solid ${themedStyles.getBorderColor()}`,
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    {/* Logo representation */}
                    <Box
                      sx={{
                        width: 120,
                        height: 120,
                        backgroundColor: colors.deepBlue,
                        borderRadius: "24px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mb: 3,
                        position: "relative",
                        "&::before": {
                          content: '""',
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          width: "60%",
                          height: "60%",
                          background: "#ffffff",
                          borderRadius: "8px",
                          transform: "translate(-50%, -50%) rotate(45deg)",
                        },
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          width: "30%",
                          height: "30%",
                          background: colors.deepBlue,
                          borderRadius: "4px",
                          transform: "translate(-50%, -50%) rotate(45deg)",
                          zIndex: 1,
                        },
                      }}
                    />

                    <Typography
                      variant="h6"
                      sx={{
                        color: themedStyles.getTextColor("primary"),
                        fontFamily: '"Open Sauce One", sans-serif',
                        textAlign: "center",
                      }}
                    >
                      Premium Enterprise Solutions
                    </Typography>
                  </Card>

                  {/* Stats grid */}
                  <Grid container spacing={2}>
                    {stats.map((stat, index) => (
                      <Grid size={{ xs: 6 }} key={index}>
                        <Card
                          sx={{
                            ...themedStyles.cardStyle,
                            p: 2,
                            textAlign: "center",
                            background:
                              themedStyles.getMatteBackground("secondary"),
                            border: `1px solid ${themedStyles.getBorderColor()}`,
                          }}
                        >
                          <Typography
                            variant="h6"
                            sx={{
                              color: colors.accentBlue,
                              fontWeight: 700,
                              fontFamily: '"Open Sauce One", sans-serif',
                            }}
                          >
                            {stat.value}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              color: themedStyles.getTextColor("secondary"),
                              fontFamily: '"Open Sauce Sans", sans-serif',
                            }}
                          >
                            {stat.label}
                          </Typography>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
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
