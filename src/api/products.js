export const fetchProducts = async ()=>{
    const request = await fetch("/api/v1/products.json");
    const products = await request.json();
    return products;
}