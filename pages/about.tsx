import Link from "next/link";
import PageComponent from "./PageComponent";

export default function About() {
  return (
    <>
     <div>
      Welcome to the about page. Go to the <Link href="/">Home</Link> page.
    </div>
    <PageComponent path={""}/>
    </>
   
  );
}
