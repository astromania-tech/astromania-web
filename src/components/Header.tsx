import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  Container,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  Brightness4,
  Brightness7,
} from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";
import { useTheme, useThemedStyles } from "@hooks/useTheme";
import Logo from "./Logo";

/**
 * Header Component
 *
 * A responsive navigation header featuring:
 * - Modern glassmorphism design with backdrop blur effects
 * - Pill-shaped navigation container for desktop (inspired by modern UI trends)
 * - Active state indication for current page
 * - Dark/light theme toggle functionality
 * - Mobile-first responsive design with slide-out drawer
 * - Call-to-action button for conversions
 *
 * Design Features:
 * - Semi-transparent backgrounds with blur effects for depth
 * - Smooth animations and micro-interactions
 * - Consistent theming across light/dark modes
 * - Professional color palette from theme system
 */
const Header: React.FC = () => {
  // Theme hooks for accessing colors, dark mode state, and styling utilities
  const { isDarkMode, toggleDarkMode, colors } = useTheme();
  const themedStyles = useThemedStyles();

  // Responsive design hook - switches to mobile layout below 768px
  const isMobile = useMediaQuery("(max-width:768px)");

  // State management for mobile drawer visibility
  const [mobileOpen, setMobileOpen] = useState(false);

  // Navigation hooks for routing and active path detection
  const navigate = useNavigate();
  const location = useLocation();

  // Main navigation structure - easily maintainable and extensible
  const navigationItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Contact", path: "/contact" },
  ];

  /**
   * Toggle mobile drawer visibility
   * Used for hamburger menu functionality on mobile devices
   */
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  /**
   * Handle navigation with cleanup
   * Navigates to specified path and closes mobile drawer if open
   * Ensures consistent UX across desktop and mobile
   *
   * @param path - The route path to navigate to
   */
  const handleNavigation = (path: string) => {
    navigate(path);
    setMobileOpen(false); // Close mobile drawer after navigation
  };

  /**
   * Check if current path matches the provided path
   * Used for active state styling in navigation items
   *
   * @param path - The path to check against current location
   * @returns boolean indicating if path is currently active
   */
  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  /**
   * Mobile Drawer Content
   *
   * Contains the mobile navigation menu with:
   * - Header section with logo and close button
   * - Navigation list with active state styling
   * - Consistent theming with main header
   */
  const drawer = (
    <Box sx={{ width: 280, height: "100%" }}>
      {/* Drawer Header - Logo and Close Button */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 3,
          borderBottom: `1px solid ${themedStyles.getBorderColor()}`,
        }}
      >
        {/* Logo - clickable to navigate home */}
        <Logo
          size="small"
          variant="header"
          onClick={() => handleNavigation("/")}
        />
        {/* Close button for drawer */}
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Mobile Navigation List */}
      <List>
        {navigationItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              onClick={() => handleNavigation(item.path)}
              sx={{
                borderRadius: 2,
                py: 1.5,
                px: 2,
                m: 1,
                // Active state styling - highlights current page
                backgroundColor: isActivePath(item.path)
                  ? isDarkMode
                    ? colors.accentBlue // Blue highlight in dark mode
                    : colors.deepBlue // Darker blue in light mode
                  : "transparent", // No background for inactive items
                "&:hover": {
                  // Hover states with proper contrast
                  backgroundColor: isActivePath(item.path)
                    ? isDarkMode
                      ? colors.brightBlue // Brighter blue for active hover
                      : colors.navyBlue // Navy for active hover
                    : themedStyles.getMatteBackground("elevated"), // Subtle elevation for inactive hover
                },
              }}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontFamily: '"Open Sauce Sans", sans-serif',
                  fontWeight: 500,
                  // Text color based on active state for optimal contrast
                  color: isActivePath(item.path)
                    ? colors.pureWhite // White text on colored background
                    : themedStyles.getTextColor(), // Theme-appropriate text color
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      {/* Main AppBar - Fixed position for persistent navigation */}
      <AppBar
        position="fixed"
        elevation={0} // Remove default shadow for custom styling
        sx={{
          // Glassmorphism background with transparency and blur
          backgroundColor: isDarkMode
            ? "transparent" // Dark navy with 95% opacity
            : "rgba(250, 251, 252, 0.75)", // Light matte white with 95% opacity
          backdropFilter: "blur(15px) saturate(180%)", // Creates glassmorphism effect
          borderBottom: `2px solid ${themedStyles.getBorderColor()}`, // Subtle border
          boxShadow: themedStyles.getShadow("low"), // Minimal shadow for depth
          borderRadius: "0 0 30px 30px", // No border radius for full-width header
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ justifyContent: "space-between", py: 1.5 }}>
            {/* Logo Section - Always visible */}
            <Logo variant="header" onClick={() => handleNavigation("/")} />

            {/* Desktop Navigation - Hidden on mobile */}
            {!isMobile && (
              <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
                {/* Pill Navigation Container - Modern design pattern */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    // Glassmorphism container background
                    backgroundColor: isDarkMode
                      ? "rgba(51, 65, 85, 0.6)" // Dark slate with transparency
                      : "rgba(248, 250, 252, 0.8)", // Light background with transparency
                    borderRadius: "32px", // Full pill shape
                    padding: "8px 12px",
                    // Subtle borders for definition
                    border: `1px solid ${
                      isDarkMode
                        ? "rgba(71, 85, 105, 0.3)" // Dark border
                        : "rgba(226, 232, 240, 0.5)" // Light border
                    }`,
                    backdropFilter: "blur(12px)", // Additional blur for depth
                    gap: 1, // Space between navigation buttons
                  }}
                >
                  {/* Navigation Buttons inside Pill Container */}
                  {navigationItems.map((item) => (
                    <Button
                      key={item.label}
                      onClick={() => handleNavigation(item.path)}
                      sx={{
                        // Dynamic text color based on active state and theme
                        color: isActivePath(item.path)
                          ? colors.pureWhite // White for active items
                          : isDarkMode
                            ? colors.silver // Silver for inactive in dark mode
                            : colors.slate, // Slate for inactive in light mode
                        // Active state background highlighting
                        backgroundColor: isActivePath(item.path)
                          ? isDarkMode
                            ? colors.accentBlue // Blue highlight in dark mode
                            : colors.deepBlue // Deep blue in light mode
                          : "transparent", // No background for inactive
                        textTransform: "none",
                        fontSize: "0.875rem",
                        // Dynamic font weight for active emphasis
                        fontWeight: isActivePath(item.path) ? 600 : 500,
                        fontFamily: '"Open Sauce Sans", sans-serif',
                        px: 2.5,
                        py: 1,
                        borderRadius: "24px", // Rounded button shape
                        minWidth: "auto",
                        transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)", // Smooth animations
                        "&:hover": {
                          // Complex hover states for both active and inactive items
                          backgroundColor: isActivePath(item.path)
                            ? isDarkMode
                              ? colors.brightBlue // Brighter blue for active hover
                              : colors.navyBlue // Navy for active hover
                            : isDarkMode
                              ? "rgba(71, 85, 105, 0.4)" // Subtle dark hover
                              : "rgba(241, 245, 249, 0.8)", // Subtle light hover
                          // Text color changes on hover for better UX
                          color: isActivePath(item.path)
                            ? colors.pureWhite // Keep white for active
                            : isDarkMode
                              ? colors.pureWhite // White on dark hover
                              : colors.charcoal, // Dark on light hover
                          transform: "translateY(-1px)", // Subtle lift effect
                        },
                      }}
                    >
                      {item.label}
                    </Button>
                  ))}
                </Box>

                {/* Theme Toggle Button - Glassmorphism style */}
                <IconButton
                  onClick={toggleDarkMode}
                  sx={{
                    color: themedStyles.getTextColor("secondary"),
                    // Consistent glassmorphism styling with navigation
                    backgroundColor: isDarkMode
                      ? "rgba(51, 65, 85, 0.6)"
                      : "rgba(248, 250, 252, 0.8)",
                    border: `1px solid ${
                      isDarkMode
                        ? "rgba(71, 85, 105, 0.3)"
                        : "rgba(226, 232, 240, 0.5)"
                    }`,
                    borderRadius: "12px",
                    backdropFilter: "blur(12px)",
                    "&:hover": {
                      // Enhanced background on hover
                      backgroundColor: isDarkMode
                        ? "rgba(71, 85, 105, 0.8)"
                        : "rgba(241, 245, 249, 0.9)",
                      borderColor: themedStyles.getBorderColor("hover"),
                      transform: "scale(1.05)", // Slight scale effect
                    },
                  }}
                >
                  {/* Dynamic icon based on current theme */}
                  {isDarkMode ? <Brightness7 /> : <Brightness4 />}
                </IconButton>

                {/* Call-to-Action Button - Primary action */}
                <Button
                  variant="contained"
                  onClick={() => handleNavigation("/contact")}
                  sx={{
                    // Theme-aware primary colors
                    backgroundColor: isDarkMode
                      ? colors.accentBlue
                      : colors.deepBlue,
                    color: colors.pureWhite,
                    fontFamily: '"Open Sauce Sans", sans-serif',
                    fontWeight: 600,
                    fontSize: "0.875rem",
                    textTransform: "none",
                    px: 3,
                    py: 1.5,
                    borderRadius: "12px",
                    boxShadow: "none", // Remove default Material-UI shadow
                    border: "none",
                    transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
                    "&:hover": {
                      // Darker shade on hover
                      backgroundColor: isDarkMode
                        ? colors.brightBlue
                        : colors.navyBlue,
                      transform: "translateY(-1px)", // Lift effect
                      // Custom shadow for depth
                      boxShadow: isDarkMode
                        ? "0 12px 24px rgba(59, 130, 246, 0.15)" // Blue shadow for dark mode
                        : "0 12px 24px rgba(26, 35, 126, 0.15)", // Navy shadow for light mode
                    },
                  }}
                >
                  Get Started
                </Button>
              </Box>
            )}

            {/* Mobile Navigation - Visible only on mobile */}
            {isMobile && (
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                {/* Mobile Theme Toggle */}
                <IconButton
                  onClick={toggleDarkMode}
                  sx={{
                    color: themedStyles.getTextColor("secondary"),
                    // Consistent glassmorphism styling
                    backgroundColor: isDarkMode
                      ? "rgba(51, 65, 85, 0.6)"
                      : "rgba(248, 250, 252, 0.8)",
                    border: `1px solid ${
                      isDarkMode
                        ? "rgba(71, 85, 105, 0.3)"
                        : "rgba(226, 232, 240, 0.5)"
                    }`,
                    borderRadius: "12px",
                    backdropFilter: "blur(12px)",
                    "&:hover": {
                      backgroundColor: isDarkMode
                        ? "rgba(71, 85, 105, 0.8)"
                        : "rgba(241, 245, 249, 0.9)",
                      borderColor: themedStyles.getBorderColor("hover"),
                    },
                  }}
                >
                  {isDarkMode ? <Brightness7 /> : <Brightness4 />}
                </IconButton>

                {/* Mobile Menu Button - Hamburger menu trigger */}
                <IconButton
                  onClick={handleDrawerToggle}
                  sx={{
                    color: themedStyles.getTextColor("secondary"),
                    // Matching glassmorphism styling
                    backgroundColor: isDarkMode
                      ? "rgba(51, 65, 85, 0.6)"
                      : "rgba(248, 250, 252, 0.8)",
                    border: `1px solid ${
                      isDarkMode
                        ? "rgba(71, 85, 105, 0.3)"
                        : "rgba(226, 232, 240, 0.5)"
                    }`,
                    borderRadius: "12px",
                    backdropFilter: "blur(12px)",
                    "&:hover": {
                      backgroundColor: isDarkMode
                        ? "rgba(71, 85, 105, 0.8)"
                        : "rgba(241, 245, 249, 0.9)",
                      borderColor: themedStyles.getBorderColor("hover"),
                    },
                  }}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer - Slide-out navigation menu */}
      <Drawer
        variant="temporary" // Overlay style drawer
        anchor="right" // Slides in from right side
        open={mobileOpen} // Controlled by state
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better performance on mobile
        }}
        PaperProps={{
          sx: {
            // Themed background matching main design
            backgroundColor: themedStyles.getMatteBackground("primary"),
            borderLeft: `1px solid ${themedStyles.getBorderColor()}`,
            backdropFilter: "blur(20px)", // Glassmorphism effect
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;
