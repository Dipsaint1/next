export default function ProductDetails({params} : {params: {productId: string}}){
  

  console.log(params);
  
  return ( <h1>Details about product {params.productId}</h1> )
}