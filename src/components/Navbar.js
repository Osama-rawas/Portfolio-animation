import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { Menu } from "@mui/icons-material";

import { useState } from "react";
import { motion } from "framer-motion";
export default function Navbar() {
  const navItems = ["Home", "About", "Projects", "Contact"];

  return (
    <motion.div
      position="static"
      animate={{ y: 0 }}
      initial={{ y: "-100%" }}
      transition={{ duration: 0.7 }}
      className="navbar"
    >
      <Toolbar sx={{ mt: 1, mx: 4 }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <Menu />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            display: {
              xs: "none",
              sm: "block",
              color: "#000",
              fontSize: "26px",
              letterSpacing: "0",
            },
          }}
        >
          Osama.dev
        </Typography>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          {navItems.map((item) => (
            <Button
              key={item}
              sx={{
                color: "#666666",
                mx: 2,
                fontSize: "20px",
                letterSpacing: "0",
                fontWeight: "400",
                textTransform: "None",
              }}
            >
              {item}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </motion.div>
  );
}
