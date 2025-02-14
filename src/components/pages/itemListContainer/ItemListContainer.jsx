import { useState, useEffect } from "react";
import { products } from "../../../products";
import ProductCard from "../../common/productCard/ProductCard";
import { useParams } from "react-router";

const ItemListContainer = () => {
  const { name } = useParams();

  const [items, setItems] = useState([]);

  useEffect(() => {
    let arrayFiltrado = products.filter(
      (elemento) => elemento.category === name
    );

    const getProducts = new Promise((resolve, reject) => {
      let permiso = true;
      if (permiso) {
        resolve(name ? arrayFiltrado : products);
      } else {
        reject({ status: 400, message: "algo salio mal" });
      }
    });

    getProducts
      .then((res) => {
        setItems(res);
      })
      .catch((error) => {
        console.log(error);
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
    </div>
  );
};

export default ItemListContainer;
