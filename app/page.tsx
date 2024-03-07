'use client'
import Image from "next/image";
import HomePage from '../components/Home'
import Navbar from '../components/Navbar'
import About from '../components/About'
import SkilsPage from '../components/TechSkils'
import ProjectPage from '../components/Project'
import  ContactForm from '../components/Contacts'
export default function Home() {
  return (
    <>
    <Navbar/>
    <HomePage/>
    <About/>
    <SkilsPage/>
    <ProjectPage/>
    <ContactForm/>
    </>
  );
}
