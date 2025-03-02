import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import { Link } from "react-router";
import { useState } from "react";
import CartWidget from "../../common/cartWidget/CartWidget";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#28a745" }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo y Nombre */}
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
          }}
        >
          <img
            src="https://res.cloudinary.com/deetmxogb/image/upload/v1739141966/logo_cmqbmo.png"
            alt="Logo Amigurumis by Coni"
            style={{
              width: "50px",
              height: "50px",
              objectFit: "contain",
              marginRight: "10px",
            }}
          />
          <Typography variant="h6" sx={{ color: "white" }}>
            Amigurumis by Coni
          </Typography>
        </Link>

        {/* Enlaces de navegación */}
        <Box sx={{ display: "flex", justifyContent: "center", flexGrow: 1 }}>
          <Button
            variant="text"
            sx={{
              color: "white",
              marginRight: "20px",
              "&:hover": { backgroundColor: "#218838" },
            }}
            component={Link}
            to="/"
          >
            Inicio
          </Button>

          {/* Menú Productos */}
          <Button
            variant="text"
            sx={{
              color: "white",
              marginRight: "20px",
              "&:hover": { backgroundColor: "#218838" },
            }}
            onClick={handleMenuClick}
          >
            Productos
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleCloseMenu}
          >
            <MenuItem component={Link} to="/category/ropa-accesorios">
              Ropa y accesorios para bebés
            </MenuItem>
            <MenuItem component={Link} to="/category/amigurumis-fantasia">
              Amigurumis fantasía
            </MenuItem>
            <MenuItem component={Link} to="/category/amigurumis-animales">
              Amigurumis animales
            </MenuItem>
            <MenuItem component={Link} to="/category/ajuar-nacimiento">
              Ajuar Nacimiento
            </MenuItem>
            <MenuItem component={Link} to="/category/personajes-animacion">
              Personajes de animación
            </MenuItem>
          </Menu>

          <Button
            variant="text"
            sx={{ color: "white", "&:hover": { backgroundColor: "#218838" } }}
            component={Link}
            to="/cursos"
          >
            Cursos
          </Button>
        </Box>

        {/* Carrito de compras */}
        <IconButton
          color="inherit"
          aria-label="carrito"
          component={Link}
          to="/cart"
          sx={{ position: "relative", width: "50px", height: "50px" }}
        >
          <CartWidget />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
