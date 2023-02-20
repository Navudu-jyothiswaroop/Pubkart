import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import ProductModel from '../../models/product.model';
import { MdThumbUpAlt } from "react-icons/md";
import { FaArrowCircleLeft } from "react-icons/fa";
import Rating from '../rating/rating.component';
import "./ProductDetail.css"

type Props = {}

export default function ProductDetails({ }: Props) {
  let navigate = useNavigate();
  let { productid } = useParams();
  const [product, setProduct] = useState<ProductModel>();
  useEffect(() => {
    (async () => {
      let res = await fetch(`http://localhost:3000/products/${productid}`);

      if (res.ok) {
        let fetchedProduct: ProductModel = await res.json();
        setProduct(fetchedProduct);
      }
    })();
  }, [])
  return (
    <>
      <button className="btn btn-outline-success my-2"
        // onClick={() => navigate("/",{replace:true})}
        onClick={() => navigate("/")}
      >
        <FaArrowCircleLeft />
        Go Back
      </button>
      <h1>ProductDetails</h1>
      <div className="col-12 my-1">

        <div className="card">
          <div className="row">
            <div className="col-9">
              <img
                src={product?.imageUrl}
                alt={product?.title}
                height="700px"
                className="card-img-top"
              />
            </div>
            <div className="col-3 align-center-vertical">
              <div className="card-body ">
                <h2 className="card-title">{product?.title}</h2>
                <h5 className="card-text">₹. {product?.price}</h5>
                <p className="card-text">
                  <span
                    className={
                      product?.isAvailable
                        ? "badge bg-success"
                        : "badge bg-danger"
                    }
                  >
                    {product?.isAvailable === true
                      ? "Available"
                      : "Unavailable"}
                  </span>
                </p>
                <button
                  className="btn btn-primary "
                >
                  <MdThumbUpAlt /> {product?.likes}
                </button>
                {product ? <Rating
                  actualStars={product.rating}
                  maxStars={5}
                /> : null}
                <div className='text-muted'>
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </>
  )
}