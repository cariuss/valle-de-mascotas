import "../styles/Deleteproductos.css";
import React, { useState } from "react";
import { showSuccessMessage } from "../components/Notifications.jsx";
import { useDeleteProduct } from "../hooks/useProduct.js";
import { Button } from "../components/Button.jsx";

const DeleteProduct = () => {
  const formRef = React.useRef();
  //   const navigate = useNavigate();
  const [dataDelete, setDataDelete] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);

    let fetchData = await useDeleteProduct(data);

    setDataDelete(fetchData);
  };
  if (dataDelete && dataDelete !== "error") {
    setTimeout(() => {
      console.log("aa");
      showSuccessMessage("producto eliminado");
    }, 800);
  }
  return (
    <>
      <form class="formulario" onSubmit={handleSubmit} ref={formRef}>
        <h1>Formulario</h1>
        <input
          type="text"
          placeholder="Ingresa tu información"
          name="referencia"
        />
        <Button label={"borrar"} type="submit" />
      </form>
    </>
  );
};

export default DeleteProduct;
