import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { IoMdAddCircle } from "react-icons/io";
import ProductModel from "../../models/product.model";

type Inputs = {
  ProductId: number;
  ProductTitle: string;
  ProductPrice: number;
  ProductLikes: number;
  ProductRating: number;
  ProductImage: string;
  ProductAvailable: boolean;
  ProductDesc: string;
};

const NewProductWithReactHookForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  return (
    <div className="row justify-content-md-center m-4">
      <form
        onSubmit={handleSubmit(data => console.log(data))}
        className="col-md-4 alert alert-secondary"
      >
        <h2>New Product</h2>
        <label htmlFor="txtProductId">
          Id<span style={{ color: "red" }}>*</span> :{" "}
        </label>
        <input
          type="number"
          id="txtProductId"
          className="form-control"
          placeholder="Id Required"
          {...register("ProductId", {
            valueAsNumber: true,
            required: "Product Id is required !",
          })}
        />
        {errors.ProductId && (
          <p style={{ color: "red" }}>{errors.ProductId.message}</p>
        )}
        <label htmlFor="txtProductTitle">
          Title<span style={{ color: "red" }}>*</span> :{" "}
        </label>
        <input
          type="text"
          id="txtProductTitle"
          className="form-control"
          placeholder="Title Required"
          {...register("ProductTitle", {
            required: "Product Title is required !",
            maxLength: {
              value: 20,
              message: "You exceeded max length of 20 chars !",
            },
          })}
        />
        {errors.ProductTitle && (
          <p style={{ color: "red" }}>{errors.ProductTitle.message}</p>
        )}
        <label htmlFor="txtProductPrice">
          Price<span style={{ color: "red" }}>*</span> :{" "}
        </label>

        <input
          type="number"
          id="txtProductPrice"
          className="form-control"
          placeholder="Price Required"
          {...register("ProductPrice", {
            valueAsNumber: true,
            required: "Product Price is required !",
          })}
        />
        {errors.ProductPrice && (
          <p style={{ color: "red" }}>{errors.ProductPrice.message}</p>
        )}
        <label htmlFor="txtProductLikes">Likes : </label>
        <input
          type="number"
          id="txtProductLikes"
          className="form-control"
          {...register("ProductLikes", { valueAsNumber: true })}
        />
        <label htmlFor="txtProductRating">Rating : </label>
        <input
          type="number"
          id="txtProductRating"
          className="form-control"
          {...register("ProductRating", { valueAsNumber: true })}
        />
        <label htmlFor="txtProductImage">Image URL : </label>
        <input
          type="text"
          id="txtProductImage"
          className="form-control"
          {...register("ProductImage")}
        />
        <label htmlFor="txtProductDescription">Description : </label>
        <input
          type="text"
          id="txtProductDescription"
          className="form-control"
          {...register("ProductDesc")}
        />
        <div className="my-2">
          <label htmlFor="rdbAvailable">Available</label>
          <input
            type="checkbox"
            id="chkAvailable"
            className="form-check-input"
            {...register("ProductAvailable")}
          />
          {"    "}
        </div>
        <button className="btn btn-success my-2">
          Add New Product <IoMdAddCircle />
        </button>
      </form>
    </div>
  );
};

export default NewProductWithReactHookForm;
