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
import { useNavigate } from "react-router-dom";
import { useTheme, useThemedStyles } from "@hooks/useTheme";
import Logo from "./Logo";

const Header: React.FC = () => {
  const { isDarkMode, toggleDarkMode, colors } = useTheme();
  const themedStyles = useThemedStyles();
  const isMobile = useMediaQuery("(max-width:768px)");
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const navigationItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Contact", path: "/contact" },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    setMobileOpen(false);
  };

  const drawer = (
    <Box sx={{ width: 280, height: "100%" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 3,
          borderBottom: `1px solid ${themedStyles.getBorderColor()}`,
        }}
      >
        <Logo
          size="small"
          variant="header"
          onClick={() => handleNavigation("/")}
        />
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
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
                "&:hover": {
                  backgroundColor: themedStyles.getMatteBackground("elevated"),
                },
              }}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontFamily: '"Open Sauce Sans", sans-serif',
                  fontWeight: 500,
                  color: themedStyles.getTextColor(),
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
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: themedStyles.getMatteBackground("primary"),
          backdropFilter: "blur(16px) saturate(180%)",
          borderBottom: `1px solid ${themedStyles.getBorderColor()}`,
          boxShadow: themedStyles.getShadow("low"),
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ justifyContent: "space-between", py: 1 }}>
            {/* Logo */}
            <Logo variant="header" onClick={() => handleNavigation("/")} />

            {/* Desktop Navigation */}
            {!isMobile && (
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                {navigationItems.map((item) => (
                  <Button
                    key={item.label}
                    onClick={() => handleNavigation(item.path)}
                    sx={{
                      color: themedStyles.getTextColor("secondary"),
                      textTransform: "none",
                      fontSize: "0.875rem",
                      fontWeight: 500,
                      fontFamily: '"Open Sauce Sans", sans-serif',
                      px: 2,
                      py: 1,
                      borderRadius: 2,
                      transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
                      "&:hover": {
                        backgroundColor:
                          themedStyles.getMatteBackground("elevated"),
                        color: themedStyles.getTextColor("primary"),
                        transform: "translateY(-1px)",
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
                <IconButton
                  onClick={toggleDarkMode}
                  sx={{
                    ml: 2,
                    color: themedStyles.getTextColor("secondary"),
                    backgroundColor: "transparent",
                    border: `1px solid ${themedStyles.getBorderColor()}`,
                    borderRadius: 2,
                    "&:hover": {
                      backgroundColor:
                        themedStyles.getMatteBackground("elevated"),
                      borderColor: themedStyles.getBorderColor("hover"),
                      transform: "scale(1.05)",
                    },
                  }}
                >
                  {isDarkMode ? <Brightness7 /> : <Brightness4 />}
                </IconButton>
                <Button
                  variant="contained"
                  onClick={() => handleNavigation("/contact")}
                  sx={{
                    ml: 2,
                    backgroundColor: colors.deepBlue,
                    color: "#ffffff",
                    fontFamily: '"Open Sauce Sans", sans-serif',
                    fontWeight: 600,
                    fontSize: "0.875rem",
                    textTransform: "none",
                    px: 3,
                    py: 1.5,
                    borderRadius: 2,
                    boxShadow: "none",
                    border: "none",
                    transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
                    "&:hover": {
                      backgroundColor: colors.navyBlue,
                      transform: "translateY(-1px)",
                      boxShadow: themedStyles.getShadow("medium"),
                    },
                  }}
                >
                  Get Started
                </Button>
              </Box>
            )}

            {/* Mobile Navigation */}
            {isMobile && (
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <IconButton
                  onClick={toggleDarkMode}
                  sx={{
                    color: themedStyles.getTextColor("secondary"),
                    backgroundColor: "transparent",
                    border: `1px solid ${themedStyles.getBorderColor()}`,
                    borderRadius: 2,
                    "&:hover": {
                      backgroundColor:
                        themedStyles.getMatteBackground("elevated"),
                      borderColor: themedStyles.getBorderColor("hover"),
                    },
                  }}
                >
                  {isDarkMode ? <Brightness7 /> : <Brightness4 />}
                </IconButton>
                <IconButton
                  onClick={handleDrawerToggle}
                  sx={{
                    color: themedStyles.getTextColor("secondary"),
                    backgroundColor: "transparent",
                    border: `1px solid ${themedStyles.getBorderColor()}`,
                    borderRadius: 2,
                    "&:hover": {
                      backgroundColor:
                        themedStyles.getMatteBackground("elevated"),
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

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        PaperProps={{
          sx: {
            backgroundColor: themedStyles.getMatteBackground("primary"),
            borderLeft: `1px solid ${themedStyles.getBorderColor()}`,
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;
