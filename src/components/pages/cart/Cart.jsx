import { Link } from "react-router";
import { Card, CardActionArea, CardContent, Typography, Box } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Cart = () => {
  return (
    <Box 
      sx={{ 
        display: "flex", 
        justifyContent: "center", 
        gap: 2, 
        flexWrap: "wrap", 
        p: 2 
      }}
    >
      {/* Card de COMPRAR */}
      <Card sx={{ bgcolor: "#A7E6A7", borderRadius: 2, boxShadow: 3, minWidth: 200 }}>
        <CardActionArea component={Link} to="/cartCompras">
          <CardContent sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1 }}>
            <ShoppingCartIcon fontSize="large" />
            <Typography variant="h6" fontWeight="bold">
              COMPRAR
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      {/* Card de FINALIZAR COMPRA */}
      <Card sx={{ bgcolor: "#A7E6A7", borderRadius: 2, boxShadow: 3, minWidth: 200 }}>
        <CardActionArea component={Link} to="/checkout">
          <CardContent sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1 }}>
            <CheckCircleIcon fontSize="large" />
            <Typography variant="h6" fontWeight="bold">
              Finalizar compra
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default Cart;
