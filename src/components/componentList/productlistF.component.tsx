import React, { useEffect, useState } from 'react'
import ProductModel from '../../models/product.model';
import NewProduct from '../newProduct/NewProduct.component';
import ProductFunctional from '../product/product.functional.component';

export default function ProductListFunctional() {
    const [products, setProducts] = useState(new Array<ProductModel>());
    useEffect(() => {
        (async () => {
          let res = await fetch("http://localhost:3000/products");
    
          if (res.ok) {
            let products: ProductModel[] = await res.json();
            setProducts(products);
          }
        })();
      },[]);
    function deleteAProduct(productId: number) {    
        let newProductList = products.filter(p => p.id !== productId);
        console.log(newProductList);
        setProducts(newProductList);
      }
    function addAProduct(product:ProductModel){
        let newProducts = [...products]
        newProducts.push(product);
        setProducts(newProducts);
    }
    let productsToBeCreated = products.map(product => (
        <ProductFunctional
            key={product.id}
            productdetails={product}
            deleteAProduct={(productId: number) => deleteAProduct(productId)}
        />
    ));
    return (
        <div>
            <div className="row">{productsToBeCreated}</div>
        </div>
    )
}