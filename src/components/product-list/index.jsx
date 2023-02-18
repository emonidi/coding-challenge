import { Card, Alert } from "flowbite-react";


export default function ProductList({ productList, isLoading }) {
  const shouldShowNoProducts = !isLoading && productList.length === 0;

  return (
    <>
      {
        shouldShowNoProducts ? <Alert
          color="warning"

        >
          <h3 className="text-lg font-medium text-blue-700 dark:text-blue-800">
            No products to be displayed.
          </h3>
        </Alert> :
         <div data-testid="product-list" className="grid grid-cols-3 gap-4 product-list m-auto" >

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
                   {product.description ? product.description.substring(0, 100) : ""}
                 </p>
                 <p>
                   {product.price_sign}{parseFloat(product.price).toFixed(2)}
                 </p>
               </Card>
             </div>
           )
         }
       </div>
      }
     
    </>
  )
}