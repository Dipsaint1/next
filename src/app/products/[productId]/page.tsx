export default function ProductDetails({ params }: {
  params: { productId: string }
} ) {

  console.log(params.productId);

  return(
    <h1>Details about product {  }</h1>
  )
};
