import React from "react";
import "./style.css";
const List = () => {
  let products = JSON.parse(localStorage.getItem("products")) || [];
  console.log(products);
  const deleteProduct = (id) => {
    products.splice(id, 1);
    console.log(products);
    localStorage.setItem("products", JSON.stringify(products));
    window.location.reload(); 
  };
  const updateProduct=(id)=>{
    
  }
  return (
    <div id="main-box">
      {products.map((product, index) => {
        
        return (
          <div key={index}>
            <img src={product.img} alt="" />
            <h3>{product.title}</h3>
            <p>{product.price}</p>
            <button onClick={() => deleteProduct(index)}>delete</button>
            <button onClick={()=>updateProduct(index)}>update</button>
          </div>
        );
      })}
    </div>
  );
};

export default List;
