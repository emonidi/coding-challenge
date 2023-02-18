import { Card } from "flowbite-react";
import { useState } from "react";

export default function ProductList({ productList }) {
  
    return (
        <div  data-testid="product-list" className="grid grid-cols-3 gap-4 product-list m-auto" >
            {
                productList.map(product =>
                    <div className="max-w" key={product.id}>
                    <Card
                      className="h-80"
                      horizontal={true}
                      imgAlt="product.name"
                      imgSrc={product.api_featured_image}
                    >
                      <a href={product.product_link} target="_blank">
                      <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {product.name}
                      </h5>
                      </a>
                      <p className="font-normal text-gray-700 dark:text-gray-400">
                        {product.description ? product.description.substring(0,100) : ""}
                      </p>
                      <p>
                        {product.price_sign}{parseFloat(product.price).toFixed(2)}
                      </p>
                    </Card>
                  </div>
                )
            }
        </div>
    )
}