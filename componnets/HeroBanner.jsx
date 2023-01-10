import Link from "next/link";
import React from "react";
import { urlfor } from "../lib/client";

function heroBanner({heroBanner}) {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">{heroBanner.smallText}</p>
        <h2>{heroBanner.midText}</h2>
        <h1>{heroBanner.largeText1}</h1>
        <img src={urlfor(heroBanner.image)}  alt="image" className="hero-banner-image"  />
      </div>

      <Link href={`./product/${heroBanner.product}`}>
        <button type="button">{heroBanner.buttonText}</button>
      </Link>
       <div className="desc">
        <h5>Description</h5>
        <p>{heroBanner.desc}</p>
       </div>
    </div>
  );
}

export default heroBanner;
