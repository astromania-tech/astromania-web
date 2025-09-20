import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Chip,
  useTheme,
  useMediaQuery,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import {
  AutoAwesome,
  CloudQueue,
  Architecture,
  Security,
  Speed,
  Analytics,
  DeviceHub,
  Rocket,
  CheckCircle,
  ExpandMore,
} from "@mui/icons-material";
import { motion } from "framer-motion";

interface Service {
  icon: React.ReactElement;
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  pricing: string;
  benefits: string[];
}

const Services: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const services: Service[] = [
    {
      icon: <AutoAwesome />,
      title: "AI & Machine Learning Solutions",
      description:
        "Transform your business with intelligent automation and predictive analytics powered by cutting-edge AI technologies.",
      features: [
        "Custom Machine Learning Models",
        "Natural Language Processing",
        "Computer Vision Systems",
        "Predictive Analytics",
        "AI-Powered Automation",
        "Intelligent Decision Support",
      ],
      technologies: [
        "TensorFlow",
        "PyTorch",
        "OpenAI GPT",
        "Scikit-learn",
        "Pandas",
        "NumPy",
      ],
      pricing: "Starting at $15,000/month",
      benefits: [
        "Reduce operational costs by up to 40%",
        "Improve decision-making accuracy",
        "Automate repetitive tasks",
        "Gain competitive insights from data",
      ],
    },
    {
      icon: <CloudQueue />,
      title: "DevOps & Cloud Infrastructure",
      description:
        "Streamline your development lifecycle with robust CI/CD pipelines and scalable cloud architecture.",
      features: [
        "CI/CD Pipeline Setup",
        "Container Orchestration",
        "Infrastructure as Code",
        "Monitoring & Logging",
        "Security Integration",
        "Performance Optimization",
      ],
      technologies: [
        "Kubernetes",
        "Docker",
        "Terraform",
        "Jenkins",
        "AWS",
        "Azure",
      ],
      pricing: "Starting at $8,000/month",
      benefits: [
        "Reduce deployment time by 80%",
        "Improve system reliability",
        "Scale applications automatically",
        "Enhance security posture",
      ],
    },
    {
      icon: <Architecture />,
      title: "Enterprise Architecture",
      description:
        "Design and implement scalable, resilient enterprise architectures that grow with your business needs.",
      features: [
        "Microservices Architecture",
        "API Gateway Design",
        "Event-Driven Systems",
        "Database Optimization",
        "Load Balancing",
        "System Integration",
      ],
      technologies: [
        "Spring Boot",
        "Node.js",
        "GraphQL",
        "PostgreSQL",
        "Redis",
        "RabbitMQ",
      ],
      pricing: "Starting at $12,000/month",
      benefits: [
        "Handle 10x more concurrent users",
        "Reduce system downtime by 95%",
        "Improve data consistency",
        "Enable rapid feature development",
      ],
    },
    {
      icon: <Security />,
      title: "Security & Compliance",
      description:
        "Protect your digital assets with comprehensive security solutions and compliance frameworks.",
      features: [
        "Security Audits",
        "Penetration Testing",
        "Compliance Automation",
        "Identity Management",
        "Data Encryption",
        "Threat Detection",
      ],
      technologies: [
        "OAuth 2.0",
        "SAML",
        "Vault",
        "Splunk",
        "Wireshark",
        "Nessus",
      ],
      pricing: "Starting at $10,000/month",
      benefits: [
        "Achieve 99.9% security compliance",
        "Reduce security incidents by 90%",
        "Protect sensitive data",
        "Meet regulatory requirements",
      ],
    },
    {
      icon: <Speed />,
      title: "Performance Optimization",
      description:
        "Maximize your application performance with advanced optimization techniques and monitoring solutions.",
      features: [
        "Code Optimization",
        "Database Tuning",
        "Caching Strategies",
        "CDN Implementation",
        "Performance Monitoring",
        "Capacity Planning",
      ],
      technologies: [
        "New Relic",
        "DataDog",
        "Elasticsearch",
        "Memcached",
        "Nginx",
        "Apache",
      ],
      pricing: "Starting at $6,000/month",
      benefits: [
        "Improve page load times by 70%",
        "Reduce server costs by 50%",
        "Enhance user experience",
        "Increase conversion rates",
      ],
    },
    {
      icon: <Analytics />,
      title: "Data Analytics & BI",
      description:
        "Turn your data into actionable insights with advanced analytics and business intelligence solutions.",
      features: [
        "Data Warehousing",
        "ETL Pipelines",
        "Real-time Analytics",
        "Interactive Dashboards",
        "Predictive Modeling",
        "Data Visualization",
      ],
      technologies: [
        "Tableau",
        "Power BI",
        "Apache Spark",
        "Snowflake",
        "Airflow",
        "Kafka",
      ],
      pricing: "Starting at $9,000/month",
      benefits: [
        "Make data-driven decisions faster",
        "Identify new revenue opportunities",
        "Reduce operational inefficiencies",
        "Improve customer satisfaction",
      ],
    },
  ];

  const processSteps = [
    {
      step: "1",
      title: "Discovery & Analysis",
      description:
        "We start by understanding your business needs, current challenges, and technical requirements.",
    },
    {
      step: "2",
      title: "Solution Design",
      description:
        "Our experts design a custom solution architecture tailored to your specific use case.",
    },
    {
      step: "3",
      title: "Development & Implementation",
      description:
        "We build and deploy your solution using industry best practices and cutting-edge technologies.",
    },
    {
      step: "4",
      title: "Testing & Optimization",
      description:
        "Comprehensive testing and performance optimization ensure your solution meets all requirements.",
    },
    {
      step: "5",
      title: "Deployment & Support",
      description:
        "We handle deployment and provide ongoing support to ensure continued success.",
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
                  Our Services
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
                  Comprehensive technology solutions designed to accelerate your
                  digital transformation and drive business growth through
                  innovation.
                </Typography>
              </motion.div>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Services Grid */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid size={{ xs: 12, lg: 6 }} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: `0 12px 40px ${theme.palette.primary.main}20`,
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  <CardContent sx={{ p: 4, flexGrow: 1 }}>
                    {/* Service Header */}
                    <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                      <Box
                        sx={{
                          p: 2,
                          borderRadius: "50%",
                          backgroundColor: theme.palette.primary.light + "20",
                          color: theme.palette.primary.main,
                          mr: 2,
                        }}
                      >
                        {service.icon}
                      </Box>
                      <Box>
                        <Typography
                          variant="h5"
                          sx={{ fontWeight: 700, mb: 0.5 }}
                        >
                          {service.title}
                        </Typography>
                        <Typography
                          variant="h6"
                          sx={{
                            color: theme.palette.primary.main,
                            fontWeight: 600,
                          }}
                        >
                          {service.pricing}
                        </Typography>
                      </Box>
                    </Box>

                    {/* Description */}
                    <Typography
                      variant="body1"
                      sx={{
                        color: theme.palette.text.secondary,
                        mb: 3,
                        lineHeight: 1.6,
                      }}
                    >
                      {service.description}
                    </Typography>

                    {/* Features */}
                    <Accordion defaultExpanded>
                      <AccordionSummary expandIcon={<ExpandMore />}>
                        <Typography variant="h6" sx={{ fontWeight: 600 }}>
                          Key Features
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <List dense>
                          {service.features.map((feature, featureIndex) => (
                            <ListItem key={featureIndex} sx={{ py: 0.5 }}>
                              <ListItemIcon sx={{ minWidth: 32 }}>
                                <CheckCircle
                                  sx={{
                                    color: theme.palette.success.main,
                                    fontSize: 20,
                                  }}
                                />
                              </ListItemIcon>
                              <ListItemText
                                primary={feature}
                                primaryTypographyProps={{
                                  variant: "body2",
                                  color: "text.secondary",
                                }}
                              />
                            </ListItem>
                          ))}
                        </List>
                      </AccordionDetails>
                    </Accordion>

                    {/* Technologies */}
                    <Box sx={{ mt: 3, mb: 3 }}>
                      <Typography
                        variant="subtitle2"
                        sx={{ fontWeight: 600, mb: 1 }}
                      >
                        Technologies Used:
                      </Typography>
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                        {service.technologies.map((tech, techIndex) => (
                          <Chip
                            key={techIndex}
                            label={tech}
                            size="small"
                            sx={{
                              backgroundColor:
                                theme.palette.secondary.light + "20",
                              color: theme.palette.secondary.main,
                              fontSize: "0.75rem",
                            }}
                          />
                        ))}
                      </Box>
                    </Box>

                    {/* Benefits */}
                    <Box sx={{ mt: "auto" }}>
                      <Typography
                        variant="subtitle2"
                        sx={{ fontWeight: 600, mb: 1 }}
                      >
                        Key Benefits:
                      </Typography>
                      {service.benefits.map((benefit, benefitIndex) => (
                        <Box
                          key={benefitIndex}
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            mb: 0.5,
                          }}
                        >
                          <Box
                            sx={{
                              width: 4,
                              height: 4,
                              borderRadius: "50%",
                              backgroundColor: theme.palette.primary.main,
                              mr: 1,
                            }}
                          />
                          <Typography
                            variant="body2"
                            sx={{ color: theme.palette.text.secondary }}
                          >
                            {benefit}
                          </Typography>
                        </Box>
                      ))}
                    </Box>

                    {/* CTA Button */}
                    <Button
                      variant="contained"
                      fullWidth
                      sx={{
                        mt: 3,
                        background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
                        "&:hover": {
                          background: `linear-gradient(45deg, ${theme.palette.primary.dark} 30%, ${theme.palette.secondary.dark} 90%)`,
                        },
                      }}
                    >
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Process Section */}
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
            Our Process
          </Typography>
          <Grid container spacing={4}>
            {processSteps.map((step, index) => (
              <Grid size={{ xs: 12, md: 6, lg: 2.4 }} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Box sx={{ textAlign: "center" }}>
                    <Box
                      sx={{
                        width: 60,
                        height: 60,
                        borderRadius: "50%",
                        background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mx: "auto",
                        mb: 2,
                        color: "white",
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                      }}
                    >
                      {step.step}
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                      {step.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: theme.palette.text.secondary,
                        lineHeight: 1.6,
                      }}
                    >
                      {step.description}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Container maxWidth="md" sx={{ py: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card
            sx={{
              p: 6,
              textAlign: "center",
              background: `linear-gradient(135deg, ${theme.palette.primary.main}10 0%, ${theme.palette.secondary.main}10 100%)`,
              border: `1px solid ${theme.palette.primary.main}20`,
            }}
          >
            <Rocket
              sx={{
                fontSize: 48,
                color: theme.palette.primary.main,
                mb: 2,
              }}
            />
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                mb: 2,
                color: theme.palette.text.primary,
              }}
            >
              Ready to Get Started?
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: theme.palette.text.secondary,
                mb: 4,
                maxWidth: "500px",
                mx: "auto",
              }}
            >
              Let's discuss your project requirements and create a custom
              solution that drives your business forward.
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: 2,
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
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
                  },
                }}
              >
                Schedule Consultation
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
                  },
                }}
              >
                Download Brochure
              </Button>
            </Box>
          </Card>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Services;
