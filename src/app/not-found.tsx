import Link from "next/link";

export default function NotFound(){
  return (
    <div>
      <h2>Page not found</h2>
      <p>Are you lost?</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}
