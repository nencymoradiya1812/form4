import React, { useState } from 'react';

const Form = () => {
  let [title, setTitle] = useState("");
  let [price, setPrice] = useState(0);
  let [img, setImg] = useState("");
  let products = JSON.parse(localStorage.getItem("products")) || [];

  const handleSubmit = (e) => {
    e.preventDefault();
    const product = {
      title: title,
      price: price,
      img: img
    };
    console.log(products);
    products.push(product);
    localStorage.setItem("products", JSON.stringify(products));
    window.location.reload();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='title' value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="number" placeholder='price' value={price} onChange={(e) => setPrice(e.target.value)} />
        <input type="text" placeholder='img' value={img} onChange={(e) => setImg(e.target.value)} />
        <input type="submit" value="add" />
      </form>
    </div>
  );
};

export default Form;
