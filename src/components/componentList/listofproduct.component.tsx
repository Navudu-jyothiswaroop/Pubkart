import React, { Component } from "react";
import ProductModel from "../../models/product.model";
import Product from "../product/product.component";

type Props = {};

type ProductListState = {
  products: ProductModel[];
};

export default class ProductList extends Component<Props, ProductListState> {
  state = {
    products: new Array<ProductModel>(),
  };

  async componentDidMount() {
    let res = await fetch("http://localhost:3000/products");

    if (res.ok) {
      let products: ProductModel[] = await res.json();
      this.setState({ products });
    }
  }

  deleteAProduct(productId: number) {
    console.log(`Deleting A Product - ${productId}`);

    let newProductList = this.state.products.filter(p => p.id !== productId);
    this.setState({ products: newProductList });
  }

  render() {
    //console.log("Product List rendered !");
    let productsToBeCreated = this.state.products.map(product => (
      <Product
        key={product.id}
        productdetails={product}
        deleteAProduct={(productId: number) => this.deleteAProduct(productId)}
      />
    ));
    return (
      <div>
        <h1 className="text-center">Pubkart ClassBased</h1>
        <div className="row">{productsToBeCreated}</div>
      </div>
    );
  }
}
