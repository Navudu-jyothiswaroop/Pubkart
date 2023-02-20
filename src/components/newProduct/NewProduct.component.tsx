import React, { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import ProductModel from "../../models/product.model";

export default function NewProduct() {
  let [newproduct, setNewProduct] = useState({});
  function handleSubmit() {
    (async () => {
        const settings = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        };
        fetch('http://localhost:3000/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newproduct),
        })
            .then((response) => response.json())
            .then((data:ProductModel) => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    })();
}
  return (
    <div className="row justify-content-md-center m-4">
      <form className="col-md-4 alert alert-secondary">
        <h2>New Product</h2>
        <label htmlFor="txtProductId">Id : </label>
        <input
          type="number"
          id="txtProductId"
          className="form-control"
          onChange={e => {
            setNewProduct({ ...newproduct, id: +e.target.value });
          }}
        />
        <label htmlFor="txtProductName">Title : </label>
        <input
          type="text"
          id="txtProductName"
          className="form-control"
          onChange={e => {
            setNewProduct({ ...newproduct, title: e.target.value });
          }}
        />
        <label htmlFor="txtProductPrice">Price : </label>
        <input
          type="number"
          id="txtProductPrice"
          className="form-control"
          onChange={e => {
            setNewProduct({ ...newproduct, price: +e.target.value });
          }}
        />
        <label htmlFor="txtProductLikes">Likes : </label>
        <input
          type="number"
          id="txtProductLikes"
          className="form-control"
          onChange={e => {
            setNewProduct({ ...newproduct, likes: +e.target.value });
          }}
        />
        <label htmlFor="txtProductRating">Rating : </label>
        <input
          type="number"
          id="txtProductRating"
          className="form-control"
          onChange={e => {
            setNewProduct({ ...newproduct, rating: +e.target.value });
          }}
        />
        <label htmlFor="txtProductImage">Image URL : </label>
        <input
          type="text"
          id="txtProductImage"
          className="form-control"
          onChange={e => {
            setNewProduct({ ...newproduct, imageUrl: e.target.value });
          }}
        />
        <div className="my-2">
          <input
            type="radio"
            id="rdbAvailable"
            name="availibility"
            className="form-check-input"
            onChange={e => {
                setNewProduct({ ...newproduct, isAvailable: true });
              }}
          />{" "}
          <label htmlFor="rdbAvailable">Available</label>
          {"    "}
          <input
            type="radio"
            id="rdbUnAvailable"
            name="availibility"
            className="form-check-input"
            onChange={e => {
                setNewProduct({ ...newproduct, isAvailable: false });
              }}
          />{" "}
          <label htmlFor="rdbUnAvailable">Unavailable</label>
        </div>
        <button
          type="button"
          className="btn btn-success my-2"
          onClick={() => handleSubmit()}
        >
          Add New Product <IoMdAddCircle />
        </button>
      </form>
    </div>
  );
}
