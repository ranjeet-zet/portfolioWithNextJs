import Image from "next/image";
import HomePage from '../components/Home'
import Navbar from '../components/Navbar'
import About from '../components/About'
import SkilsPage from '../components/TechSkils'
export default function Home() {
  return (
    <>
     <Navbar/>
    <HomePage/>
    <About/>
    <SkilsPage/>
    </>
  );
}
