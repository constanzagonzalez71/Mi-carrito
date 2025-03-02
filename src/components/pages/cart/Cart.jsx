import { Button, Box, Typography, Card, CardContent } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router";
import { CartContext } from "../../context/CartContext";

import Swal from "sweetalert2";
import { toast } from "sonner";

const Cart = () => {
  const { resetCart, cart, removeById, getTotalAmount } =
    useContext(CartContext);

  let total = getTotalAmount();

  const resetCartWithAlert = () => {
    Swal.fire({
      title: "¿Seguro quieres vaciar el carrito?",
      showDenyButton: true,
      confirmButtonText: "Sí, vaciar",
      denyButtonText: "No, dejar como estaba",
    }).then((result) => {
      if (result.isConfirmed) {
        resetCart();
        Swal.fire("Carrito vaciado con éxito", "", "success");
      } else if (result.isDenied) {
        Swal.fire("El carrito queda como estaba", "", "info");
      }
    });
  };

  if (cart.length === 0) {
    toast.info("El carrito está vacío", { duration: 5000 });
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: 2,
        textAlign: "center",
      }}
    >
      {cart.length > 0 ? (
        cart.map((elemento) => (
          <Card
            key={elemento.id}
            sx={{ width: "90%", maxWidth: 400, marginBottom: 2, boxShadow: 3 }}
          >
            <CardContent>
              <Typography variant="h6">{elemento.title}</Typography>
              <Typography>Cantidad: {elemento.quantity}</Typography>
              <Typography>Precio: ${elemento.price}</Typography>
              <Button
                variant="outlined"
                color="error"
                sx={{ marginTop: 1 }}
                onClick={() => {
                  removeById(elemento.id);
                  toast.warning("El producto fue eliminado");
                }}
              >
                Eliminar
              </Button>
            </CardContent>
          </Card>
        ))
      ) : (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 3,
            backgroundColor: "#D1F2D1", // Verde claro
            borderRadius: "8px",
            boxShadow: 3, // Sombra suave
            width: "80%",
            maxWidth: 400,
          }}
        >
          <Typography variant="h6" sx={{ color: "#2D6A4F" }}>
            El carrito está vacío
          </Typography>
        </Box>
      )}

      {cart.length > 0 && (
        <Typography variant="h6" sx={{ marginBottom: 2 }}>
          Total a pagar: ${total}
        </Typography>
      )}

      {cart.length > 0 && (
        <Button
          variant="contained"
          color="primary"
          sx={{ marginBottom: 2 }}
          onClick={resetCartWithAlert}
        >
          Vaciar carrito
        </Button>
      )}

      {cart.length > 0 && (
        <Button variant="contained" color="success">
          <Link
            to="/checkout"
            style={{ color: "white", textDecoration: "none" }}
          >
            Finalizar compra
          </Link>
        </Button>
      )}
    </Box>
  );
};

export default Cart;
