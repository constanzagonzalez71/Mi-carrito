import { Button } from "@mui/material";
import { Link } from "react-router";

const ProductCard = ({ price, title, stock, imageUrl, id, category }) => {
  return (
    <div
      style={{
        border: "2px solid black",
        width: "300px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "10px",
        textAlign: "center",
      }}
    >
      <img
        src={imageUrl}
        alt={title}
        style={{
          width: "100%", 
          height: "200px", 
          objectFit: "cover", 
          borderBottom: "2px solid black",
        }}
      />
      <h2>{title}</h2>
      <h2>${price}</h2>
      <h2>Stock: {stock}</h2>
      <h2>{category}</h2>
      <Link to={`/itemDetail/${id}`}>
        <Button variant="outlined">Ver detalle</Button>
      </Link>
    </div>
  );
};

export default ProductCard;
