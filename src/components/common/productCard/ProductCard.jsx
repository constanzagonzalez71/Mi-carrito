import { Button } from "@mui/material";
import { Link } from "react-router";

const ProductCard = ({ price, title, stock, imageUrl, id, category }) => {
  // Modificar la URL de la imagen para ajustar el tamaño (por ejemplo, 300x300)
  const imageUrlWithTransform = `${imageUrl}?w=300&h=300&fit=crop`; // Ajusta los parámetros según tus necesidades

  return (
    <div
      style={{
        border: "2px solid #8fbc8f", // Borde verde suave
        width: "300px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "10px",
        textAlign: "center",
        borderRadius: "8px", // Bordes redondeados
        boxShadow: "0px 4px 12px rgba(143, 188, 143, 0.5)", // Sombra suave verde
        transition: "transform 0.3s ease-in-out", // Efecto de transformación al pasar el mouse
      }}
    >
      <img
        src={imageUrlWithTransform} 
        alt={title}
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
          borderBottom: "2px solid #8fbc8f",
          borderTopLeftRadius: "8px", 
          borderTopRightRadius: "8px", 
        }}
      />
      <h2>{title}</h2>
      <h2>${price}</h2>
      <h2>Stock: {stock}</h2>
      <h2>{category}</h2>
      <Link to={`/itemDetail/${id}`}>
        <Button variant="outlined" style={{ marginTop: "10px" }}>
          Ver detalle
        </Button>
      </Link>
    </div>
  );
};

export default ProductCard;
