import { useState } from "react";


const Counter = ({ item }) => {
  const [contador, setContador] = useState(1);

  const sumar = () => {
    if (contador < item.stock) {
      setContador(contador + 1);
    } else {
      alert("stock maximo");
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    } else {
      alert("minimo 1 producto");
    }
  };

  // cart = [ {} ]
  const onAdd = () => {
    console.log("agregar al carrito");
    
    let objetoParaElCarrito = { ...item, quantity: contador };
    console.log(objetoParaElCarrito);
  };

  return (
    <div>
      <div style={{ display: "flex", gap: "20px" }}>
        <button onClick={restar}>restar</button>
        <h2>{contador}</h2>
        <button onClick={sumar}>sumar</button>
      </div>
      <button onClick={onAdd}>Agregar al carrito</button>
    </div>
  );
};

export default Counter;
