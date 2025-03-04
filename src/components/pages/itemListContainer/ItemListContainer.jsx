import { useState, useEffect } from "react";
import { useParams } from "react-router";
import ProductCard from "../../common/productCard/ProductCard";
import ProductSkeleton from "../../common/productSkeleton/ProductSkeleton";
import { Box } from "@mui/material";
import { db } from "../../../firebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const { name } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const coleccionDeProductos = collection(db, "products");
    let consulta = coleccionDeProductos;

    if (name) {
      consulta = query(coleccionDeProductos, where("category", "==", name));
    }

    getDocs(consulta)
      .then((res) => {
        const newArray = res.docs.map((elemento) => ({
          id: elemento.id,
          ...elemento.data(),
        }));
        setItems(newArray);
      })
      .catch((error) => {
        console.error("Error obteniendo productos:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [name]);

  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          margin: "20px 0",
          fontFamily: "'Roboto', sans-serif",
        }}
      >
        Amigurumis By Coni
      </h1>

      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", gap: "20px" }}>
          <ProductSkeleton />
          <ProductSkeleton />
          <ProductSkeleton />
        </Box>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "20px",
            marginTop: "16px",
          }}
        >
          {items.map((item) => (
            <ProductCard
              key={item.id}
              price={item.price}
              title={item.title}
              stock={item.stock}
              imageUrl={item.imageUrl}
              id={item.id}
              description={item.description}
              category={item.category}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;
