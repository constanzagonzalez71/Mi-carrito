import { useState, useEffect } from "react";
import { products } from "../../../products";
import ProductCard from "../../common/productCard/ProductCard";
import { useParams } from "react-router";
import ProductSkeleton from "../../common/productSkeleton/ProductSkeleton";
import { Box } from "@mui/material";

const ItemListContainer = () => {
  const { name } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true); // Nuevo estado de carga

  useEffect(() => {
    setLoading(true); // Activar la carga antes de iniciar la promesa

    let arrayFiltrado = products.filter(
      (elemento) => elemento.category === name
    );

    const getProducts = new Promise((resolve, reject) => {
      let permiso = true;
      setTimeout(() => {
        // Simular un retraso en la carga
        if (permiso) {
          resolve(name ? arrayFiltrado : products);
        } else {
          reject({ status: 400, message: "algo salió mal" });
        }
      }, 2000); // Simulación de 2 segundos de carga
    });

    getProducts
      .then((res) => {
        setItems(res);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false); // Desactivar la carga al finalizar
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
          {items.map((item) => {
            return (
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
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;
