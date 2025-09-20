import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Chip,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import {
  Rocket,
  AutoAwesome,
  CloudQueue,
  Architecture,
  EmojiObjects,
  Speed,
  Security,
  Analytics,
} from "@mui/icons-material";
import { motion } from "framer-motion";

const About: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const teamMembers = [
    {
      name: "Alex Rodriguez",
      role: "CEO & Founder",
      avatar: "/api/placeholder/150/150",
      bio: "Visionary leader with 15+ years in enterprise software and AI solutions.",
      skills: ["Leadership", "Strategy", "AI/ML", "Enterprise Architecture"],
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      avatar: "/api/placeholder/150/150",
      bio: "Technology expert specializing in scalable systems and DevOps practices.",
      skills: ["Cloud Architecture", "DevOps", "Microservices", "Kubernetes"],
    },
    {
      name: "Marcus Johnson",
      role: "Head of AI",
      avatar: "/api/placeholder/150/150",
      bio: "AI researcher and engineer with expertise in machine learning and NLP.",
      skills: ["Machine Learning", "Deep Learning", "NLP", "Computer Vision"],
    },
    {
      name: "Emily Davis",
      role: "Head of DevOps",
      avatar: "/api/placeholder/150/150",
      bio: "DevOps specialist focused on automation and continuous delivery.",
      skills: ["CI/CD", "Infrastructure as Code", "Monitoring", "Automation"],
    },
  ];

  const milestones = [
    {
      year: "2020",
      title: "Company Founded",
      description:
        "Started with a vision to revolutionize enterprise software development.",
      icon: <Rocket />,
    },
    {
      year: "2021",
      title: "AI Division Launch",
      description: "Established our AI and machine learning capabilities.",
      icon: <AutoAwesome />,
    },
    {
      year: "2022",
      title: "Cloud Excellence",
      description: "Achieved AWS and Azure advanced partner status.",
      icon: <CloudQueue />,
    },
    {
      year: "2023",
      title: "Enterprise Growth",
      description: "Expanded to serve Fortune 500 companies worldwide.",
      icon: <Architecture />,
    },
  ];

  const values = [
    {
      icon: <EmojiObjects />,
      title: "Innovation",
      description:
        "We embrace cutting-edge technologies to solve complex problems.",
    },
    {
      icon: <Speed />,
      title: "Excellence",
      description:
        "We deliver high-quality solutions that exceed expectations.",
    },
    {
      icon: <Security />,
      title: "Trust",
      description:
        "We build secure, reliable systems our clients can depend on.",
    },
    {
      icon: <Analytics />,
      title: "Impact",
      description:
        "We create solutions that drive real business transformation.",
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
    <Box sx={{ pt: 10 }}>
      {/* Hero Section */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          background: `linear-gradient(135deg,
            ${theme.palette.background.default} 0%,
            ${theme.palette.primary.light}15 50%,
            ${theme.palette.secondary.light}10 100%)`,
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <Box sx={{ textAlign: "center", mb: 8 }}>
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h1"
                  sx={{
                    fontWeight: 800,
                    mb: 3,
                    background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontSize: isMobile ? "2.5rem" : "3.5rem",
                  }}
                >
                  About AstroMANIA
                </Typography>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h5"
                  sx={{
                    color: theme.palette.text.secondary,
                    maxWidth: "800px",
                    mx: "auto",
                    lineHeight: 1.6,
                  }}
                >
                  We are a forward-thinking technology company dedicated to
                  developing scalable software solutions that harness the power
                  of artificial intelligence to solve complex enterprise
                  challenges.
                </Typography>
              </motion.div>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Mission & Vision */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  color: theme.palette.primary.main,
                }}
              >
                Our Mission
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "1.125rem",
                  lineHeight: 1.8,
                  color: theme.palette.text.secondary,
                }}
              >
                To empower businesses with innovative AI-driven solutions and
                robust DevOps practices that enable digital transformation and
                sustainable growth. We believe technology should solve real
                problems and create meaningful impact.
              </Typography>
            </motion.div>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  color: theme.palette.secondary.main,
                }}
              >
                Our Vision
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "1.125rem",
                  lineHeight: 1.8,
                  color: theme.palette.text.secondary,
                }}
              >
                To be the leading provider of intelligent enterprise solutions
                that bridge the gap between cutting-edge technology and
                practical business applications, making advanced AI and DevOps
                accessible to organizations of all sizes.
              </Typography>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* Values Section */}
      <Box
        sx={{
          py: 8,
          background: `linear-gradient(180deg,
            ${theme.palette.background.default} 0%,
            ${theme.palette.background.paper} 100%)`,
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            sx={{
              textAlign: "center",
              fontWeight: 700,
              mb: 6,
              color: theme.palette.text.primary,
            }}
          >
            Our Values
          </Typography>
          <Grid container spacing={4}>
            {values.map((value, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      height: "100%",
                      textAlign: "center",
                      p: 3,
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: `0 12px 40px ${theme.palette.primary.main}20`,
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        mb: 2,
                      }}
                    >
                      <Box
                        sx={{
                          p: 2,
                          borderRadius: "50%",
                          backgroundColor: theme.palette.primary.light + "20",
                          color: theme.palette.primary.main,
                        }}
                      >
                        {value.icon}
                      </Box>
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                      {value.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: theme.palette.text.secondary }}
                    >
                      {value.description}
                    </Typography>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Timeline */}
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            fontWeight: 700,
            mb: 6,
            color: theme.palette.text.primary,
          }}
        >
          Our Journey
        </Typography>
        <Timeline position={isMobile ? "right" : "alternate"}>
          {milestones.map((milestone, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    color: "white",
                    p: 1,
                  }}
                >
                  {milestone.icon}
                </TimelineDot>
                {index < milestones.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card sx={{ p: 3, mb: 2 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        color: theme.palette.primary.main,
                      }}
                    >
                      {milestone.year}
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                      {milestone.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: theme.palette.text.secondary }}
                    >
                      {milestone.description}
                    </Typography>
                  </Card>
                </motion.div>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>

      {/* Team Section */}
      <Box
        sx={{
          py: 8,
          background: `linear-gradient(180deg,
            ${theme.palette.background.paper} 0%,
            ${theme.palette.primary.light}05 100%)`,
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            sx={{
              textAlign: "center",
              fontWeight: 700,
              mb: 6,
              color: theme.palette.text.primary,
            }}
          >
            Meet Our Team
          </Typography>
          <Grid container spacing={4}>
            {teamMembers.map((member, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      height: "100%",
                      textAlign: "center",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: `0 12px 40px ${theme.palette.primary.main}20`,
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Avatar
                        src={member.avatar}
                        sx={{
                          width: 100,
                          height: 100,
                          mx: "auto",
                          mb: 2,
                          bgcolor: theme.palette.primary.main,
                        }}
                      >
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </Avatar>
                      <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                        {member.name}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          color: theme.palette.primary.main,
                          fontWeight: 500,
                          mb: 2,
                        }}
                      >
                        {member.role}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: theme.palette.text.secondary,
                          mb: 2,
                          fontSize: "0.875rem",
                        }}
                      >
                        {member.bio}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: 0.5,
                          justifyContent: "center",
                        }}
                      >
                        {member.skills.map((skill, skillIndex) => (
                          <Chip
                            key={skillIndex}
                            label={skill}
                            size="small"
                            sx={{
                              backgroundColor:
                                theme.palette.primary.light + "20",
                              color: theme.palette.primary.main,
                              fontSize: "0.75rem",
                            }}
                          />
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default About;
