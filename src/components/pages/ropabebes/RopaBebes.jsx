import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Box, Card, CardMedia, CardContent, Typography, Container } from "@mui/material";

const products = [
  {
    id: "2",
    title: "Susurro de algodón",
    price: 80000,
    stock: 2,
    category: "ropa-accesorios", 
    description: "Kit de manta de nacimiento, chaleco t.0-3 meses y un oso de apego.",
    imageUrl: "https://res.cloudinary.com/deetmxogb/image/upload/v1739144740/Set_de_nacimiento_Susurro_de_Algod%C3%B3n_2_hskv6h.jpg",
  },
  {
    id: "6",
    title: "Ajuar Nacimiento",
    price: 70000,
    stock: 2,
    category: "ropa-accesorios", 
    description: "Sweter lana talle 0-3 meses, gorro lana y escarpines de lana.",
    imageUrl: "https://res.cloudinary.com/deetmxogb/image/upload/v1739144694/Ajuar_primeros_d%C3%ADas_ndazvi.jpg",
  },
];

const RopaBebes = () => {
  const { categoria } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (categoria) {
      const filtered = products.filter((product) => product.category === categoria);
      setFilteredProducts(filtered);
    }
  }, [categoria]);

  return (
    <Container>
      <Typography variant="h4" sx={{ textAlign: "center", mt: 4, mb: 3 }}>
        Ropa y accesorios para bebés
      </Typography>
      
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 3 }}>
        {filteredProducts.map((producto) => (
          <Card key={producto.id} sx={{ width: 300, boxShadow: 3, borderRadius: 2 }}>
            <CardMedia component="img" height="200" image={producto.imageUrl} alt={producto.title} />
            <CardContent>
              <Typography variant="h6">{producto.title}</Typography>
              <Typography variant="body2" color="text.secondary">
                {producto.description}
              </Typography>
              <Typography variant="h6" color="primary" sx={{ mt: 1 }}>
                ${producto.price}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  );
};

export default RopaBebes;

