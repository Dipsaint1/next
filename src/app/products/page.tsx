import Link from "next/link";

export default function ProductList(){
  const productId = 100;
  return ( 
    <>
      <Link href='/'>Home</Link>
      <h1>Product List</h1>
      <Link href='products/1'><h4>Product 1</h4></Link>
      <Link href='products/2'><h4>Product 2</h4></Link>
      <Link href='products/3' replace><h4>Product 3</h4></Link>
      <Link href={`products/${productId}`}><h4>Product 4</h4></Link>
    </>
  )
}