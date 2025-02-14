import { useState } from "react";
import { Button, TextField, MenuItem, Select, InputLabel, FormControl, Container, Typography } from "@mui/material";

const Checkout = () => {
  const [user, setUser] = useState({
    nombre: "",
    email: "",
    telefono: "",
    categoria: "",  // Cambio de 'talle' a 'categoria'
  });

  // Array de categorías de productos
  const arrayCategorias = [
    { label: "Ropa y accesorios para bebés", value: "ropa_bebes" },
    { label: "Amigurumis fantasía", value: "amigurumis_fantasia" },
    { label: "Amigurumis animales", value: "amigurumis_animales" },
    { label: "Ajuar Nacimiento", value: "ajuar_nacimiento" },
    { label: "Personajes de animación", value: "personajes_animacion" },
  ];

  // Manejar cambio en los campos de entrada
  const handleChange = (evento) => {
    const { value, name } = evento.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (evento) => {
    evento.preventDefault();
    console.log(user);
    // Aquí puedes agregar la lógica para enviar la orden al backend
    alert("¡Gracias por tu compra!");
  };

  return (
    <Container maxWidth="sm" sx={{ marginTop: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Finalizar Compra
      </Typography>

      <form onSubmit={handleSubmit}>
        {/* Campos de entrada */}
        <TextField
          label="Nombre"
          name="nombre"
          value={user.nombre}
          onChange={handleChange}
          fullWidth
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Email"
          name="email"
          value={user.email}
          onChange={handleChange}
          fullWidth
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Teléfono"
          name="telefono"
          value={user.telefono}
          onChange={handleChange}
          fullWidth
          sx={{ marginBottom: 2 }}
        />

        {/* Select para la categoría */}
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
        <Button variant="contained" color="primary" type="submit" fullWidth sx={{ marginBottom: 2 }}>
          Comprar
        </Button>
        <Button variant="outlined" fullWidth>
          Cancelar
        </Button>
      </form>
    </Container>
  );
};

export default Checkout;
