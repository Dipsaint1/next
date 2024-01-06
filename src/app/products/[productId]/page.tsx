// export default function ProductDetails({ params } : { params: { productId: string }}){
export default function ProductDetails({ params : { productId }} : {
  params: { productId: string }
}){
  
  return ( <h1>Details about product { productId }</h1> )
}