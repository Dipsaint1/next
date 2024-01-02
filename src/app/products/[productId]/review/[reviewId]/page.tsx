// export default function ReviewDetails({ params }: {
//   params: { reviewId: string }
// }){

//   const { reviewId } = params;
//   return( <h1>Review page {reviewId}</h1> )
// }

export default function ReviewDetails({ params : { reviewId, productId } }: {
  params: { 
    reviewId: string,
    productId: string
  }
}){
  return( <h1>Review {reviewId} for product {productId}</h1> )
}