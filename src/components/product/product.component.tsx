import React, { Component } from "react";
import ProductModel from "../../models/product.model";
import Rating from "../rating/rating.component";
import { MdThumbUpAlt } from "react-icons/md";
import { BsFillTrashFill } from "react-icons/bs";

type ProductProps = {
  productdetails: ProductModel;
  deleteAProduct: (productId: number) => void;
};

type ProductState = {
  currLikes: number;
};

export default class Product extends Component<ProductProps, ProductState> {
  constructor(props: ProductProps) {
    super(props);
    this.state = { currLikes: this.props.productdetails.likes };
  }

  IncrementLikes() {
    this.setState({ currLikes: this.state.currLikes + 1 });
  }
  render() {
    // console.log("Product rendered !" + this.props.productdetails.id);

    return (
      <div className="col-md-3 my-1">
        <div className="card">
          <img
            src={this.props.productdetails.imageUrl}
            alt={this.props.productdetails.title}
            height="250px"
            width="300px"
            className="card-img-top"
          />
          <div className="card-body">
            <Rating
              actualStars={this.props.productdetails.rating}
              maxStars={5}
            />
            <h4 className="card-title">{this.props.productdetails.title}</h4>
            <h5 className="card-text">₹. {this.props.productdetails.price}</h5>
            <p className="card-text">
              {/* Could be a seperate Badge Component taking props */}
              <span
                className={
                  this.props.productdetails.isAvailable
                    ? "badge bg-success"
                    : "badge bg-danger"
                }
              >
                {this.props.productdetails.isAvailable === true
                  ? "Available"
                  : "Unavailable"}
              </span>
            </p>
            <button
              className="btn btn-primary "
              // onClick={this.IncrementLikes.bind(this)}
              onClick={() => this.IncrementLikes()}
            >
              {/* {this.props.productdetails.likes} */}
              <MdThumbUpAlt /> {this.state.currLikes}
            </button>
            <button
              className="btn btn-danger mx-2"
              onClick={() =>
                this.props.deleteAProduct(this.props.productdetails.id)
              }
            >
              <BsFillTrashFill />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
