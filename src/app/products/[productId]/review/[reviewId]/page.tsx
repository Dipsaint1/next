import { notFound } from "next/navigation";
// import NotFound from "./not-found";

const getRandomInt = (count: number) => { 
  return Math.floor(Math.random() * count);
}

export default function ReviewDetails({ params : { reviewId, productId } }: {
  params: { reviewId: string, productId: string }
}){
  const randomNumber = getRandomInt(2);
  if(randomNumber === 1){
    throw new Error("Error Loading Review"); 
  }

  if(parseInt(reviewId) > 1000){
    return notFound();
  }

  return( <h1>Review {reviewId} for product {productId}</h1> )
}