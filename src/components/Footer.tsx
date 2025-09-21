import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
  useTheme,
} from "@mui/material";
import {
  LinkedIn,
  Twitter,
  GitHub,
  Email,
  Phone,
  LocationOn,
  ArrowUpward,
} from "@mui/icons-material";
import Logo from "./Logo";

const Footer: React.FC = () => {
  const theme = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = {
    company: [
      { label: "About Us", href: "/about" },
      { label: "Our Team", href: "/team" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
    services: [
      { label: "AI Solutions", href: "/services/ai" },
      { label: "DevOps", href: "/services/devops" },
      { label: "Cloud Architecture", href: "/services/cloud" },
      { label: "Consulting", href: "/services/consulting" },
    ],
    solutions: [
      { label: "Enterprise Software", href: "/solutions/enterprise" },
      { label: "Custom Development", href: "/solutions/custom" },
      { label: "System Integration", href: "/solutions/integration" },
      { label: "Digital Transformation", href: "/solutions/transformation" },
    ],
    resources: [
      { label: "Blog", href: "/blog" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Documentation", href: "/docs" },
      { label: "Support", href: "/support" },
    ],
  };

  const socialLinks = [
    {
      icon: <LinkedIn />,
      href: "https://linkedin.com/company/astromania",
      label: "LinkedIn",
    },
    {
      icon: <Twitter />,
      href: "https://twitter.com/astromania",
      label: "Twitter",
    },
    {
      icon: <GitHub />,
      href: "https://github.com/astromania",
      label: "GitHub",
    },
  ];

  return (
    <Box
      component="footer"
      sx={{
        background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.primary.main}05 100%)`,
        borderTop: `1px solid ${theme.palette.divider}`,
        pt: 6,
        pb: 3,
        mt: "auto",
      }}
    >
      <Container maxWidth="lg">
        {/* Main Footer Content */}
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Logo size="medium" variant="footer" showText={false} />
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  ml: 2,
                  background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                AstroMANIA
              </Typography>
            </Box>
            <Typography
              variant="body1"
              sx={{
                color: theme.palette.text.secondary,
                mb: 3,
                lineHeight: 1.7,
              }}
            >
              Developing scalable software solutions using cutting-edge AI to
              solve complex enterprise challenges with DevOps excellence.
            </Typography>

            {/* Contact Info */}
            <Box sx={{ mb: 3 }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <Email
                  sx={{
                    mr: 1,
                    fontSize: 18,
                    color: theme.palette.primary.main,
                  }}
                />
                <Typography variant="body2" color="text.secondary">
                  contact@astromania.com
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <Phone
                  sx={{
                    mr: 1,
                    fontSize: 18,
                    color: theme.palette.primary.main,
                  }}
                />
                <Typography variant="body2" color="text.secondary">
                  +1 (555) 123-4567
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <LocationOn
                  sx={{
                    mr: 1,
                    fontSize: 18,
                    color: theme.palette.primary.main,
                  }}
                />
                <Typography variant="body2" color="text.secondary">
                  San Francisco, CA
                </Typography>
              </Box>
            </Box>

            {/* Social Links */}
            <Box sx={{ display: "flex", gap: 1 }}>
              {socialLinks.map((social, index) => (
                <IconButton
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: theme.palette.text.secondary,
                    "&:hover": {
                      color: theme.palette.primary.main,
                      backgroundColor: theme.palette.primary.main + "10",
                    },
                  }}
                  aria-label={social.label}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>

          {/* Footer Links */}
          <Grid size={{ xs: 12, md: 8 }}>
            <Grid container spacing={3}>
              <Grid size={{ xs: 6, sm: 3 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    mb: 2,
                    color: theme.palette.text.primary,
                  }}
                >
                  Company
                </Typography>
                {footerLinks.company.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    sx={{
                      display: "block",
                      mb: 1,
                      color: theme.palette.text.secondary,
                      textDecoration: "none",
                      "&:hover": {
                        color: theme.palette.primary.main,
                      },
                    }}
                  >
                    <Typography variant="body2">{link.label}</Typography>
                  </Link>
                ))}
              </Grid>

              <Grid size={{ xs: 6, sm: 3 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    mb: 2,
                    color: theme.palette.text.primary,
                  }}
                >
                  Services
                </Typography>
                {footerLinks.services.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    sx={{
                      display: "block",
                      mb: 1,
                      color: theme.palette.text.secondary,
                      textDecoration: "none",
                      "&:hover": {
                        color: theme.palette.primary.main,
                      },
                    }}
                  >
                    <Typography variant="body2">{link.label}</Typography>
                  </Link>
                ))}
              </Grid>

              <Grid size={{ xs: 6, sm: 3 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    mb: 2,
                    color: theme.palette.text.primary,
                  }}
                >
                  Solutions
                </Typography>
                {footerLinks.solutions.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    sx={{
                      display: "block",
                      mb: 1,
                      color: theme.palette.text.secondary,
                      textDecoration: "none",
                      "&:hover": {
                        color: theme.palette.primary.main,
                      },
                    }}
                  >
                    <Typography variant="body2">{link.label}</Typography>
                  </Link>
                ))}
              </Grid>

              <Grid size={{ xs: 6, sm: 3 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    mb: 2,
                    color: theme.palette.text.primary,
                  }}
                >
                  Resources
                </Typography>
                {footerLinks.resources.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    sx={{
                      display: "block",
                      mb: 1,
                      color: theme.palette.text.secondary,
                      textDecoration: "none",
                      "&:hover": {
                        color: theme.palette.primary.main,
                      },
                    }}
                  >
                    <Typography variant="body2">{link.label}</Typography>
                  </Link>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* Newsletter Signup */}
        <Box
          sx={{
            mt: 6,
            p: 4,
            borderRadius: 2,
            background: `linear-gradient(135deg, ${theme.palette.primary.main}08 0%, ${theme.palette.secondary.main}08 100%)`,
            border: `1px solid ${theme.palette.primary.main}20`,
          }}
        >
          <Grid container spacing={3} alignItems="center">
            <Grid size={{ xs: 12, md: 8 }}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 600,
                  mb: 1,
                  color: theme.palette.text.primary,
                }}
              >
                Stay Updated
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.text.secondary,
                }}
              >
                Subscribe to our newsletter for the latest insights on AI,
                DevOps, and enterprise solutions.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Box sx={{ display: "flex", gap: 1 }}>
                <Box
                  component="input"
                  placeholder="Enter your email"
                  sx={{
                    flex: 1,
                    p: "12px 16px",
                    border: `1px solid ${theme.palette.divider}`,
                    borderRadius: 1,
                    fontSize: "0.875rem",
                    "&:focus": {
                      outline: "none",
                      borderColor: theme.palette.primary.main,
                    },
                  }}
                />
                <Box
                  component="button"
                  sx={{
                    px: 3,
                    py: "12px",
                    background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
                    border: "none",
                    borderRadius: 1,
                    color: "white",
                    fontWeight: 500,
                    cursor: "pointer",
                    "&:hover": {
                      opacity: 0.9,
                    },
                  }}
                >
                  Subscribe
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Bottom Footer */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: theme.palette.text.secondary,
            }}
          >
            © 2024 AstroMANIA Enterprise. All rights reserved.
          </Typography>

          <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
            <Link
              href="/privacy"
              sx={{
                color: theme.palette.text.secondary,
                textDecoration: "none",
                "&:hover": {
                  color: theme.palette.primary.main,
                },
              }}
            >
              <Typography variant="body2">Privacy Policy</Typography>
            </Link>
            <Link
              href="/terms"
              sx={{
                color: theme.palette.text.secondary,
                textDecoration: "none",
                "&:hover": {
                  color: theme.palette.primary.main,
                },
              }}
            >
              <Typography variant="body2">Terms of Service</Typography>
            </Link>
            <IconButton
              onClick={scrollToTop}
              sx={{
                color: theme.palette.text.secondary,
                "&:hover": {
                  color: theme.palette.primary.main,
                  backgroundColor: theme.palette.primary.main + "10",
                },
              }}
              aria-label="Scroll to top"
            >
              <ArrowUpward />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
