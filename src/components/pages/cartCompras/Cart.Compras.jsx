import { Link } from "react-router";
import { Box, Typography, Button, Divider, Stack } from "@mui/material";

const CartCompras = () => {
  return (
    <Box 
      sx={{ 
        p: 3, 
        bgcolor: "background.paper", 
        borderRadius: 2, 
        boxShadow: 3, 
        maxWidth: 400, 
        mx: "auto" 
      }}
    >
      {/* Título */}
      <Typography variant="h6" fontWeight="bold" mb={2}>
        Tu carrito de compras
      </Typography>

      {/* Información de entrega */}
      <Stack spacing={1} mb={2}>
        <Typography variant="body2" color="success.main" fontWeight="bold">
          Llega gratis hoy
        </Typography>
        <Typography variant="body2">
          por ser tu primera compra
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Comprando dentro de las próximas <strong>6 h 42 min</strong>
        </Typography>

        <Typography variant="body2" color="success.main" fontWeight="bold" mt={1}>
          Retirá gratis a partir de mañana sábado
        </Typography>
        <Typography variant="body2" color="text.secondary">
          En correos y otros puntos <span style={{ color: "#1976d2", cursor: "pointer" }}>Ver en el mapa</span>
        </Typography>
      </Stack>

      <Divider />

      {/* Stock y cantidad */}
      <Stack spacing={1} mt={2} mb={2}>
        <Typography variant="body2" color="text.primary">
          Stock disponible
        </Typography>
        <Typography variant="body2">
          Cantidad: <strong>1 unidad</strong> (60 disponibles)
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Podés comprar hasta 3 unidades
        </Typography>
      </Stack>

      {/* Botones */}
      <Stack spacing={2}>
        <Button variant="contained" color="primary" fullWidth>
          Comprar ahora
        </Button>
        <Button variant="contained" color="inherit" disabled fullWidth>
          Agregar al carrito
        </Button>
      </Stack>

      {/* Finalizar compra */}
      <Typography variant="body2" textAlign="center" mt={2}>
        <Link to="/checkout" style={{ textDecoration: "none", color: "#1976d2" }}>
          Finalizar compra
        </Link>
      </Typography>
    </Box>
  );
};

export default CartCompras;
