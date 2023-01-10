import React from "react";
import Link from "next/link";
import { urlfor } from "../lib/client";

function Product({ product: { image, name, price, slug } }) {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          <img
            alt="image"
            src={urlfor(image && image[0])}
            width={250}
            height={250}
            className="prodct-image"
          />
          <p className="product-name">{name}</p>
          <p className="product-price">${price}</p>
        </div>
      </Link>
    </div>
  );
}

export default Product;
