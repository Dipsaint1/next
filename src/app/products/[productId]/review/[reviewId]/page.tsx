import { notFound } from "next/navigation";
// import NotFound from "./not-found";

export default function ReviewDetails({ params : { reviewId, productId } }: {
  params: { 
    reviewId: string,
    productId: string
  }
}){
  if(parseInt(reviewId) > 1000){
    return notFound();
  }

  return( <h1>Review {reviewId} for product {productId}</h1> )
}