import { useState } from "react";
import { Link } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  Container,
  Button,
  Drawer,
  IconButton,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

import { navLinks } from "./navLinks";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background: "rgba(255,255,255,.95)",
        backdropFilter: "blur(15px)",
        borderBottom: "1px solid #EEF2FF",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar className="flex justify-between h-24">
          {/* Logo */}

          <Link to="/" className="flex items-center gap-3">
            <img src="/images/logo/logo.png" alt="" className="w-12" />

            <div>
              <h2 className="text-2xl font-bold text-blue-700">Techverve</h2>

              <p className="text-xs text-slate-500">Software Solutions</p>
            </div>
          </Link>

          {/* Desktop Menu */}

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((item) => (
              <Link
                key={item.title}
                to={item.path}
                className="font-medium text-slate-700 hover:text-blue-600 transition"
              >
                {item.title}
              </Link>
            ))}
          </div>

          {/* Buttons */}

          <div className="hidden lg:flex gap-3">
            <Button variant="outlined" color="primary">
              Login
            </Button>

            <Button variant="contained">Get Quote</Button>
          </div>

          {/* Mobile */}

          <div className="lg:hidden">
            <IconButton onClick={() => setOpen(true)}>
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </Container>

      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <div className="w-72 p-6">
          <h2 className="text-2xl font-bold mb-6 text-blue-700">Techverve</h2>

          {navLinks.map((item) => (
            <Link
              key={item.title}
              to={item.path}
              className="block py-3 text-slate-700"
              onClick={() => setOpen(false)}
            >
              {item.title}
            </Link>
          ))}

          <Button
            variant="contained"
            fullWidth
            sx={{
              marginTop: 3,
            }}
          >
            Login
          </Button>
        </div>
      </Drawer>
    </AppBar>
  );
}
