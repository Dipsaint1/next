const getRandomInt = (count: number) => { 
  return Math.floor(Math.random() * count);
}

export default function ProductDetailsLayout({children}: {
  children: React.ReactNode;
}) {

  const randomNumber = getRandomInt(2);
  if(randomNumber === 1){
    throw new Error("Error Loading Product"); 
  }

  return(
    <main style={{ backgroundColor: 're'}}>
      { children }
      <h2>Features Product</h2>
    </main>
  )
}
