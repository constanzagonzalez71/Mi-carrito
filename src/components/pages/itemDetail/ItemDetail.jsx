import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { products } from "../../../products";
import Counter from "../../common/counter/Counter";
import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";

export const ItemDetail = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});

  useEffect(() => {
    let producto = products.find((product) => product.id === id);
    setItem(producto);
  }, [id]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
      }}
    >
      {/* Título principal */}
      <Typography variant="h4" sx={{ marginBottom: "20px", fontWeight: "bold" }}>
        Nuestros productos
      </Typography>

      {/* Tarjeta del producto */}
      <Card sx={{ maxWidth: 500, width: "100%", padding: "10px", textAlign: "center" }}>
        <CardMedia
          component="img"
          image={item.imageUrl}
          alt={item.title}
          sx={{
            height: 300,
            objectFit: "cover",
            borderBottom: "2px solid black",
          }}
        />
        <CardContent>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            {item.title}
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "10px" }}>
            {item.description}
          </Typography>

          {/* Contador */}
          <Counter item={item} />
        </CardContent>
      </Card>
    </Box>
  );
};
