import { useEffect, useState } from "react";
import FilterBar from "../../components/filterbar";
import ProductList from "../../components/product-list";
import { fetchProducts } from "../../api/products";
import { uniq } from "lodash";
import { Spinner } from "flowbite-react";
export default function Products() {

    const [products, setProducts] = useState([]);
    const [brands, setBrands] = useState([]);
    const [selectedBrand, setSelectedBrand] = useState();
    const [productList, setProductList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchProducts().then(res => {
            setProducts(res);
            const brands = uniq(res.map(product => product.brand));
            setBrands(brands);
            setSelectedBrand(brands[0])
            setIsLoading(false)
        });
    }, []);

    useEffect(() => {
        let productList = products.filter(p => p.brand === selectedBrand);
        setProductList(productList)
    }, [selectedBrand])

    const filterProducts = (query) => { 
        if(query == ''){
            setProductList(products.filter(p => p.brand === selectedBrand))
        }else{
            
            setProductList(products.filter(p=> p.brand === selectedBrand  && p.name.includes(query)))
        }
    } 

    return (
        <div className="container m-auto">
            {
                !isLoading ?
                <>
                    <FilterBar 
                        brands={brands} 
                        isLoading={isLoading} 
                        selectedBrand={selectedBrand} 
                        onBrandChange={(brand) => setSelectedBrand(brand)}
                        onQueryChange={(query)=> filterProducts(query)}    
                    />
                    <div className="mt-20">
                        <ProductList productList={productList}></ProductList>
                    </div>
                </> : 
                <div data-testid="loading" className="w-full flex h-60 flex items-center justify-center">
                    <Spinner size={"xl"}/>
                </div>
            }
        </div>
    )
}