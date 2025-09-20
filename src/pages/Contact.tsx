import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  useTheme,
  useMediaQuery,
  Snackbar,
  Alert,
} from '@mui/material';
import {
  Email,
  Phone,
  LocationOn,
  Send,
  Schedule,
  Support,
  Business,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

interface ContactInfo {
  icon: React.ReactElement;
  title: string;
  details: string[];
  description: string;
}

const Contact: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const contactInfo: ContactInfo[] = [
    {
      icon: <Email />,
      title: 'Email Us',
      details: ['contact@astromania.com', 'sales@astromania.com'],
      description: 'Send us an email and we will respond within 24 hours.',
    },
    {
      icon: <Phone />,
      title: 'Call Us',
      details: ['+1 (555) 123-4567', '+1 (555) 123-4568'],
      description: 'Speak directly with our expert team members.',
    },
    {
      icon: <LocationOn />,
      title: 'Visit Us',
      details: ['123 Innovation Drive', 'San Francisco, CA 94105'],
      description: 'Come visit our modern office in the heart of San Francisco.',
    },
    {
      icon: <Schedule />,
      title: 'Business Hours',
      details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat: 10:00 AM - 4:00 PM'],
      description: 'We are available during these hours for immediate assistance.',
    },
  ];

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      setSnackbarMessage('Please fill in all required fields.');
      setOpenSnackbar(true);
      return;
    }

    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);

    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      subject: '',
      message: '',
    });

    setSnackbarMessage('Thank you for your message! We will get back to you soon.');
    setOpenSnackbar(true);
  };

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
            <Box sx={{ textAlign: 'center', mb: 8 }}>
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h1"
                  sx={{
                    fontWeight: 800,
                    mb: 3,
                    background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontSize: isMobile ? '2.5rem' : '3.5rem',
                  }}
                >
                  Get In Touch
                </Typography>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h5"
                  sx={{
                    color: theme.palette.text.secondary,
                    maxWidth: '600px',
                    mx: 'auto',
                    lineHeight: 1.6,
                  }}
                >
                  Ready to transform your business with our AI-powered solutions?
                  Let's start a conversation about your next project.
                </Typography>
              </motion.div>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Contact Information Cards */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {contactInfo.map((info, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    textAlign: 'center',
                    p: 3,
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: `0 12px 40px ${theme.palette.primary.main}20`,
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <CardContent>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        mb: 2,
                      }}
                    >
                      <Box
                        sx={{
                          p: 2,
                          borderRadius: '50%',
                          backgroundColor: theme.palette.primary.light + '20',
                          color: theme.palette.primary.main,
                        }}
                      >
                        {info.icon}
                      </Box>
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 600, mb: 2 }}
                    >
                      {info.title}
                    </Typography>
                    {info.details.map((detail, detailIndex) => (
                      <Typography
                        key={detailIndex}
                        variant="body1"
                        sx={{
                          color: theme.palette.primary.main,
                          fontWeight: 500,
                          mb: 0.5,
                        }}
                      >
                        {detail}
                      </Typography>
                    ))}
                    <Typography
                      variant="body2"
                      sx={{
                        color: theme.palette.text.secondary,
                        mt: 2,
                      }}
                    >
                      {info.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Contact Form and Map */}
        <Grid container spacing={6}>
          {/* Contact Form */}
          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card sx={{ p: 4 }}>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 700,
                    mb: 1,
                    color: theme.palette.text.primary,
                  }}
                >
                  Send us a Message
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: theme.palette.text.secondary,
                    mb: 4,
                  }}
                >
                  Fill out the form below and we'll get back to you as soon as possible.
                </Typography>

                <Box component="form" onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Full Name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Email Address"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Phone Number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        multiline
                        rows={6}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        startIcon={<Send />}
                        sx={{
                          px: 4,
                          py: 1.5,
                          fontSize: '1.1rem',
                          background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
                          '&:hover': {
                            background: `linear-gradient(45deg, ${theme.palette.primary.dark} 30%, ${theme.palette.secondary.dark} 90%)`,
                          },
                        }}
                      >
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Card>
            </motion.div>
          </Grid>

          {/* Additional Information */}
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Box sx={{ pl: { md: 2 } }}>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 700,
                    mb: 3,
                    color: theme.palette.text.primary,
                  }}
                >
                  Let's Build Something Amazing Together
                </Typography>

                <Box sx={{ mb: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                    <Business
                      sx={{
                        color: theme.palette.primary.main,
                        mr: 2,
                        mt: 0.5,
                      }}
                    />
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                        Enterprise Solutions
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: theme.palette.text.secondary }}
                      >
                        Custom AI and DevOps solutions tailored to your enterprise needs.
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                    <Support
                      sx={{
                        color: theme.palette.primary.main,
                        mr: 2,
                        mt: 0.5,
                      }}
                    />
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                        24/7 Support
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: theme.palette.text.secondary }}
                      >
                        Round-the-clock support to ensure your systems run smoothly.
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                    <Schedule
                      sx={{
                        color: theme.palette.primary.main,
                        mr: 2,
                        mt: 0.5,
                      }}
                    />
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                        Quick Response
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: theme.palette.text.secondary }}
                      >
                        We respond to all inquiries within 24 hours or less.
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                {/* Map Placeholder */}
                <Card
                  sx={{
                    height: 250,
                    background: `linear-gradient(135deg, ${theme.palette.primary.light}20 0%, ${theme.palette.secondary.light}20 100%)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: `2px dashed ${theme.palette.primary.main}40`,
                  }}
                >
                  <Box sx={{ textAlign: 'center' }}>
                    <LocationOn
                      sx={{
                        fontSize: 48,
                        color: theme.palette.primary.main,
                        mb: 1,
                      }}
                    />
                    <Typography
                      variant="h6"
                      sx={{ color: theme.palette.primary.main }}
                    >
                      Our Location
                    </Typography>
                    <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                      123 Innovation Drive<br />
                      San Francisco, CA 94105
                    </Typography>
                  </Box>
                </Card>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* Snackbar for form feedback */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity={snackbarMessage.includes('Thank you') ? 'success' : 'error'}
          sx={{ width: '100%' }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
