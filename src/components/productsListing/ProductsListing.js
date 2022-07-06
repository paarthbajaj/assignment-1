import "./ProductsListing.css";
import products from "../../backend/ProductsData.json";
import { useProduct } from "../../context/ProductContext";
import { useEffect } from "react";
export const ProductsListing = () => {
  console.log(products);
  const { productState, productDispatch } = useProduct();
  useEffect(() => {
    productDispatch({ type: "FETCH_PRODUCTS", payload: products });
  }, []);
  console.log(productState);
  const { filteredProducts } = productState;
  return (
    <div className="products-container">
      <h2>PRODUCTS</h2>
      <div className="products-listing flex-row flex-wrap">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div className="single-product" key={product.id}>
              <img className="product-thumbnail" src={product.url} />
              <div className="product-info">
                <div>{product.product}</div>
                <div>{product.cost}</div>
              </div>
            </div>
          ))
        ) : (
          <div>No products found</div>
        )}
      </div>
    </div>
  );
};
