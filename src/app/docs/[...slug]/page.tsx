export default function Docs({ params : { slug }}: {
  params: {
    slug: string[]
  }
}) {
  if(slug.length === 3){
    return <h1>Viewing docs for feature {slug[0]} and concept {slug[slug.length - 1]}</h1>
  } else if(slug.length === 1){
    return <h1>Viewing docs for feature {slug[0]}</h1>
  } 
  return <h1>Docs home page {slug.length}</h1>
}
