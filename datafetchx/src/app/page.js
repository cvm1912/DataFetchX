import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
   <div>
    <h1>Welcome To Data Fetching Concepts..</h1>
    <Link href={'/recipe-list'}>Explore Recipies</Link>
   </div>
   
  );
}
