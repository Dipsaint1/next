// export default function ReviewDetails({ params }: {
//   params: { 
//     reviewId: string,
//     productId: string
//   }
// }){

//   const { reviewId, productId } = params;
//   return( <h1>Review page {reviewId}</h1> )
// }


// Destructured params
export default function ReviewDetails({ params : { reviewId, productId } }: {
  params: { 
    reviewId: string,
    productId: string
  }
}){

  return( <h1>Review {reviewId} for product {productId}</h1> )
}