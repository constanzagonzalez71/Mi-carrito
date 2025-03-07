import { useContext, useState } from "react";
import {
  Button,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Container,
  Typography,
  Snackbar,
  Alert,
  CircularProgress,
} from "@mui/material";
import { CartContext } from "../../context/CartContext";
import { db } from "../../../firebaseConfig";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";

const Checkout = () => {
  const { cart, getTotalAmount, resetCart } = useContext(CartContext);
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false); // Estado para el Toast
  const [orderId, setOrderId] = useState(null);
  const [user, setUser] = useState({
    nombre: "",
    email: "",
    telefono: "",
    categoria: "",
  });

  // Categorías de productos
  const arrayCategorias = [
    { label: "Ropa y accesorios para bebés", value: "ropa_bebes" },
    { label: "Amigurumis fantasía", value: "amigurumis_fantasia" },
    { label: "Amigurumis animales", value: "amigurumis_animales" },
    { label: "Ajuar Nacimiento", value: "ajuar_nacimiento" },
    { label: "Personajes de animación", value: "personajes_animacion" },
    { label: "Cursos", value: "curso_de_amigurumi" },
  ];

  // Manejo de inputs
  const handleChange = (evento) => {
    const { value, name } = evento.target;
    setUser({ ...user, [name]: value });
  };

  // Enviar la orden a Firebase
  const handleSubmit = async (evento) => {
    evento.preventDefault();
    setIsLoading(true);

    let total = getTotalAmount();
    let order = {
      buyer: user,
      items: cart,
      total: total,
      date: new Date(),
    };

    try {
      // Guardar la orden en Firebase
      let refCollection = collection(db, "orders");
      const docRef = await addDoc(refCollection, order);
      setOrderId(docRef.id);

      // Actualizar el stock de los productos comprados
      let productsCollection = collection(db, "products");
      order.items.forEach(async (item) => {
        let productRef = doc(productsCollection, item.id);
        await updateDoc(productRef, { stock: item.stock - item.quantity });
      });

      setOpen(true); // Mostrar el toast de éxito
      resetCart(); // Vaciar carrito
    } catch (error) {
      console.error("Error al procesar la compra:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ marginTop: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Finalizar Compra
      </Typography>

      {isLoading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          <CircularProgress color="primary" />
        </div>
      )}

      {!orderId ? (
        <form onSubmit={handleSubmit}>
          {/* Inputs de usuario */}
          <TextField
            label="Nombre"
            name="nombre"
            value={user.nombre}
            onChange={handleChange}
            fullWidth
            required
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            value={user.email}
            onChange={handleChange}
            fullWidth
            required
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Teléfono"
            name="telefono"
            value={user.telefono}
            onChange={handleChange}
            fullWidth
            required
            sx={{ marginBottom: 2 }}
          />

          {/* Select de Categoría */}
          <FormControl fullWidth sx={{ marginBottom: 2 }}>
            <InputLabel>Categoría</InputLabel>
            <Select
              name="categoria"
              value={user.categoria}
              onChange={handleChange}
              label="Categoría"
            >
              {arrayCategorias.map((categoria) => (
                <MenuItem key={categoria.value} value={categoria.value}>
                  {categoria.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* Botones de acción */}
          <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
            sx={{ marginBottom: 2 }}
            disabled={isLoading}
          >
            Comprar
          </Button>
          <Button
            variant="outlined"
            fullWidth
            onClick={() =>
              setUser({ nombre: "", email: "", telefono: "", categoria: "" })
            }
          >
            Cancelar
          </Button>
        </form>
      ) : (
        <Typography variant="h5" align="center" color="success.main">
          ¡Compra exitosa! 🛍️ Tu número de orden es: {orderId}
        </Typography>
      )}

      {/* Snackbar (Toast) para compra exitosa */}
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: "center", horizontal: "center" }} // Centrado
      >
        <Alert
          onClose={() => setOpen(false)}
          severity="success"
          variant="filled"
        >
          ¡Compra exitosa! 🎉
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Checkout;
