"use client"

import About from "./sections/About";
import Admision from "./sections/Admision";


import Footer from "./sections/Footer";
import Header from "./sections/Header";

import NotableMembers from "./sections/NotableMembers";
import CarouselSection from "./sections/CarouselSection";
import Courses from "./sections/Courses";




export default function Home() {
  return (
    <main className=" " >
      
      <CarouselSection/>
      <About/>
      <Courses/>
      <NotableMembers/>
      </main>
  );
}
