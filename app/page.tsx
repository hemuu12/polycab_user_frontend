import Image from "next/image";
import Map from "./map/page";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";

export default function Home() {
  return (
    <>
    <Navbar/>
      <Map/>
    <Footer/>
    </>
  );
}
