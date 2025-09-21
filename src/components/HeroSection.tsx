import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Chip,
  Stack,
} from "@mui/material";
import {
  TrendingUp,
  People,
  CheckCircle,
  Star,
  RocketLaunch,
  Shield,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import {
  useTheme as useCustomTheme,
  useThemedStyles,
  useSpacing,
} from "../hooks/useTheme";

const HERO_BACKGROUNDS = {
  teamCollaboration:
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  techWorkspace:
    "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
  softwareDev:
    "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2020&q=80",
  modernOffice:
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
  teamMeeting:
    "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  digitalWorkspace:
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80",
};

interface HeroSectionProps {
  backgroundImage?: keyof typeof HERO_BACKGROUNDS;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  backgroundImage = "teamCollaboration",
}) => {
  const { colors, isDarkMode } = useCustomTheme();
  const themedStyles = useThemedStyles();
  const spacing = useSpacing();

  // Smart background selection for better theme contrast
  const getOptimalBackground = () => {
    if (isDarkMode) {
      const darkOptimized = {
        teamCollaboration: HERO_BACKGROUNDS.digitalWorkspace,
        techWorkspace: HERO_BACKGROUNDS.softwareDev,
        modernOffice: HERO_BACKGROUNDS.teamMeeting,
      };
      return (
        darkOptimized[backgroundImage as keyof typeof darkOptimized] ||
        HERO_BACKGROUNDS[backgroundImage]
      );
    }
    return HERO_BACKGROUNDS[backgroundImage];
  };

  const currentBackground = getOptimalBackground();

  // Enhanced animations for smooth user experience
  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.6, delay: 0.3 },
  };

  // Real company achievements - not generic
  const achievements = [
    {
      value: "150+",
      label: "Successful Projects",
      icon: <CheckCircle />,
    },
    {
      value: "98%",
      label: "Client Satisfaction",
      icon: <Star />,
    },
    {
      value: "24/7",
      label: "Technical Support",
      icon: <People />,
    },
    {
      value: "5 Years",
      label: "Industry Experience",
      icon: <TrendingUp />,
    },
  ];

  return (
    <Box
      sx={{
        height: "100vh",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        pt: { xs: "80px", sm: "90px", md: "100px" },
        pb: { xs: spacing.md, sm: spacing.lg, md: spacing.xl },
        overflow: "hidden",
      }}
    >
      {/* Professional Background */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url('${currentBackground}')`,
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
          backgroundRepeat: "no-repeat",
          filter: `brightness(${isDarkMode ? 0.80 : 0.90}) contrast(1.25)`,
          transition: "filter 0.4s ease-in-out",
        }}
      />

      {/* Adaptive overlay for readability */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: isDarkMode
            ? `linear-gradient(135deg, ${colors.darkNavy}F0 0%, ${colors.charcoal}E6 100%)`
            : `linear-gradient(135deg, ${colors.deepBlue}E6 0%, ${colors.navyBlue}D9 100%)`,
          transition: "background 0.4s ease-in-out",
        }}
      />

      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          zIndex: 2,
          px: { xs: spacing.sm, sm: spacing.md, md: spacing.lg },
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Grid
          container
          spacing={{ xs: 2, md: 3, lg: 4 }}
          alignItems="center"
          sx={{ flex: 1 }}
        >
          {/* Main Content */}
          <Grid size={{ xs: 12, lg: 8 }}>
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              {/* Company Badge */}
              <motion.div variants={fadeInUp}>
                <Chip
                  icon={<Shield sx={{ fontSize: "18px !important" }} />}
                  label="Enterprise Software Development"
                  sx={{
                    mb: { xs: spacing.sm, md: spacing.md },
                    px: spacing.md,
                    py: spacing.xs,
                    backgroundColor:
                      themedStyles.getMatteBackground("elevated"),
                    color: themedStyles.getTextColor("primary"),
                    fontWeight: 600,
                    fontSize: { xs: "0.875rem", md: "0.9rem" },
                    border: `1px solid ${themedStyles.getBorderColor()}`,
                    borderRadius: "32px",
                    fontFamily: '"Open Sauce Sans", sans-serif',
                    boxShadow: themedStyles.getShadow("low"),
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-2px)",
                      boxShadow: themedStyles.getShadow("medium"),
                      borderColor: colors.accentBlue,
                    },
                  }}
                />
              </motion.div>

              {/* Main Headline */}
              <motion.div variants={fadeInUp}>
                <Typography
                  variant="h1"
                  component="h1"
                  sx={{
                    fontWeight: 800,
                    mb: { xs: spacing.sm, md: spacing.md },
                    color: colors.platinum,
                    fontSize: {
                      xs: "2rem",
                      sm: "2.5rem",
                      md: "3rem",
                      lg: "3.5rem",
                      xl: "4rem",
                    },
                    lineHeight: { xs: 1.2, md: 1.1 },
                    fontFamily: '"Open Sauce One", sans-serif',
                    letterSpacing: "-0.025em",
                    maxWidth: { lg: "90%" },
                  }}
                >
                  Building Tomorrow's
                  <br />
                  <Box
                    component="span"
                    sx={{
                      color: colors.accentBlue,
                      display: { xs: "block", sm: "inline" },
                      mt: { xs: 1, sm: 0 },
                    }}
                  >
                    Digital Solutions
                  </Box>
                </Typography>
              </motion.div>

              {/* Compelling Description */}
              <motion.div variants={fadeInUp}>
                <Typography
                  variant="h5"
                  component="p"
                  sx={{
                    mb: { xs: spacing.md, md: spacing.lg },
                    color: colors.lightGray,
                    fontWeight: 400,
                    lineHeight: 1.65,
                    fontSize: {
                      xs: "1rem",
                      sm: "1.1rem",
                      md: "1.2rem",
                      lg: "1.3rem",
                    },
                    fontFamily: '"Open Sauce Sans", sans-serif',
                    maxWidth: { lg: "85%" },
                    opacity: 0.95,
                  }}
                >
                  We build intelligent software solutions that transform how
                  businesses operate. From AI-powered applications to scalable
                  cloud infrastructure, we're your trusted technology partner.
                </Typography>
              </motion.div>

              {/* Call to Action */}
              <motion.div variants={fadeInUp}>
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={{ xs: 2, sm: 3 }}
                  sx={{ mb: { xs: spacing.lg, md: spacing.xl } }}
                >
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      ...themedStyles.buttonStyle.primary,
                      px: { xs: spacing.lg, md: spacing.xl },
                      py: { xs: spacing.sm, md: "14px" },
                      fontSize: { xs: "1rem", md: "1.1rem" },
                      fontWeight: 600,
                      borderRadius: "12px",
                      minWidth: { xs: "auto", sm: "200px" },
                      boxShadow: `0 8px 24px ${colors.deepBlue}30`,
                      "&:hover": {
                        transform: "translateY(-3px)",
                        boxShadow: `0 12px 32px ${colors.deepBlue}40`,
                      },
                    }}
                  >
                    Start Your Project
                  </Button>

                  <Button
                    variant="outlined"
                    size="large"
                    sx={{
                      px: { xs: spacing.lg, md: spacing.xl },
                      py: { xs: spacing.sm, md: "14px" },
                      fontSize: { xs: "1rem", md: "1.1rem" },
                      fontWeight: 600,
                      borderRadius: "12px",
                      minWidth: { xs: "auto", sm: "200px" },
                      borderColor: themedStyles.getBorderColor("hover"),
                      color: colors.platinum,
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      backdropFilter: "blur(10px)",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        backgroundColor:
                          themedStyles.getMatteBackground("elevated"),
                        borderColor: colors.accentBlue,
                        transform: "translateY(-2px)",
                      },
                    }}
                  >
                    View Our Work
                  </Button>
                </Stack>
              </motion.div>
            </motion.div>
          </Grid>
        </Grid>

        {/* Achievement Stats */}
        <motion.div variants={scaleIn}>
          <Box
            sx={{
              mt: "auto",
              p: { xs: spacing.sm, sm: spacing.md, md: spacing.lg },
              background: isDarkMode
                ? `${colors.charcoal}CC`
                : `${colors.matteWhite}F0`,
              borderRadius: "20px",
              border: `1px solid ${themedStyles.getBorderColor()}`,
              backdropFilter: "blur(20px)",
              boxShadow: themedStyles.getShadow("medium"),
              transition: "all 0.4s ease",
            }}
          >
            <Grid container spacing={{ xs: 2, md: 3 }}>
              {achievements.map((achievement, index) => (
                <Grid size={{ xs: 6, md: 3 }} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  >
                    <Stack
                      direction={{ xs: "column", sm: "row" }}
                      alignItems="center"
                      spacing={{ xs: 1, sm: 2 }}
                      sx={{
                        textAlign: { xs: "center", sm: "left" },
                      }}
                    >
                      <Box
                        sx={{
                          width: { xs: 36, md: 44 },
                          height: { xs: 36, md: 44 },
                          borderRadius: "12px",
                          background: `linear-gradient(135deg, ${colors.accentBlue}20, ${colors.deepBlue}20)`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          border: `1px solid ${colors.accentBlue}30`,
                        }}
                      >
                        {React.cloneElement(achievement.icon, {
                          sx: {
                            fontSize: { xs: 18, md: 22 },
                            color: colors.accentBlue,
                          },
                        })}
                      </Box>

                      <Box sx={{ minWidth: 0 }}>
                        <Typography
                          variant="h4"
                          sx={{
                            fontWeight: 700,
                            color: themedStyles.getTextColor("primary"),
                            fontFamily: '"Open Sauce One", sans-serif',
                            fontSize: {
                              xs: "1.2rem",
                              sm: "1.4rem",
                              md: "1.6rem",
                            },
                            lineHeight: 1.2,
                            mb: 0.5,
                          }}
                        >
                          {achievement.value}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: themedStyles.getTextColor("secondary"),
                            fontFamily: '"Open Sauce Sans", sans-serif',
                            fontSize: { xs: "0.75rem", md: "0.8rem" },
                            fontWeight: 500,
                            opacity: 0.9,
                          }}
                        >
                          {achievement.label}
                        </Typography>
                      </Box>
                    </Stack>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default HeroSection;
