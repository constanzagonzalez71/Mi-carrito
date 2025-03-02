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
  const [anchorElProductos, setAnchorElProductos] = useState(null);
  const [anchorElCursos, setAnchorElCursos] = useState(null);

  const handleMenuClickProductos = (event) => {
    setAnchorElProductos(event.currentTarget);
  };

  const handleCloseMenuProductos = () => {
    setAnchorElProductos(null);
  };

  const handleMenuClickCursos = (event) => {
    setAnchorElCursos(event.currentTarget);
  };

  const handleCloseMenuCursos = () => {
    setAnchorElCursos(null);
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#9DC08B" }}>
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
            onClick={handleMenuClickProductos}
          >
            Productos
          </Button>
          <Menu
            anchorEl={anchorElProductos}
            open={Boolean(anchorElProductos)}
            onClose={handleCloseMenuProductos}
          >
            <MenuItem component={Link} to="/category/Ropa y Accesorios ">
              Ropa y accesorios para bebés
            </MenuItem>
            <MenuItem component={Link} to="/category/Amigurumis Fantasia">
              Amigurumis fantasía
            </MenuItem>
            <MenuItem component={Link} to="/category/Amigurumis Animales">
              Amigurumis animales
            </MenuItem>
            <MenuItem component={Link} to="/category/Ajuar Nacimiento">
              Ajuar Nacimiento
            </MenuItem>
            <MenuItem component={Link} to="/category/Personajes de Animacion">
              Personajes de Animación 
            </MenuItem>
          </Menu>

          {/* Menú Cursos */}
          <Button
            variant="text"
            sx={{
              color: "white",
              marginRight: "20px",
              "&:hover": { backgroundColor: "#218838" },
            }}
            onClick={handleMenuClickCursos}
          >
            Cursos
          </Button>
          <Menu
            anchorEl={anchorElCursos}
            open={Boolean(anchorElCursos)}
            onClose={handleCloseMenuCursos}
          >
            <MenuItem component={Link} to="/category/Curso de Amigurumis">
              Curso de Iniciación
            </MenuItem>
            
          </Menu>
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
