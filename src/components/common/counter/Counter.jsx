import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Button, Typography, Box } from "@mui/material";
import { toast } from "sonner";

const Counter = ({ item }) => {
  const [contador, setContador] = useState(1);
  const { addToCart } = useContext(CartContext);

  const sumar = () => {
    if (contador < item.stock) {
      setContador(contador + 1);
    } else {
      toast.error("Stock máximo alcanzado");
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    } else {
      toast.error("Mínimo 1 producto");
    }
  };

  const onAdd = () => {
    let objetoParaElCarrito = { ...item, quantity: contador };
    addToCart(objetoParaElCarrito);
    toast.success("Producto agregado al carrito", {
      duration: 5000,
      closeButton: true,
    });
  };

  return (
    <div>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap="10px"
      >
        <Button
          onClick={restar}
          variant="contained"
          color="success"
          sx={{
            backgroundColor: "#A8D5BA", // Verde pastel claro
            "&:hover": {
              backgroundColor: "#8CBFA6", // Hover más oscuro
            },
            padding: "10px",
            minWidth: "40px",
            borderRadius: "50%", // Hacer botones redondos
          }}
        >
          -
        </Button>
        <Typography variant="h5" sx={{ minWidth: "40px", textAlign: "center" }}>
          {contador}
        </Typography>
        <Button
          onClick={sumar}
          variant="contained"
          color="success"
          sx={{
            backgroundColor: "#A8D5BA", // Verde pastel claro
            "&:hover": {
              backgroundColor: "#8CBFA6", // Hover más oscuro
            },
            padding: "10px",
            minWidth: "40px",
            borderRadius: "50%", // Hacer botones redondos
          }}
        >
          +
        </Button>
      </Box>
      <Button
        onClick={onAdd}
        variant="contained"
        color="success"
        sx={{
          backgroundColor: "#A8D5BA", // Verde pastel claro
          "&:hover": {
            backgroundColor: "#8CBFA6", // Hover más oscuro
          },
          marginTop: "20px",
          width: "100%",
          padding: "12px",
          fontWeight: "bold",
        }}
      >
        Agregar al carrito
      </Button>
    </div>
  );
};

export default Counter;
