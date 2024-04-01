"use client"

import About from "./sections/About";
import CarouselSection from "./sections/CarouselSection";
import Courses from "./sections/Courses";

import Toppers from "./sections/Toppers";




export default function Home() {
  return (
    <main className=" " >
      
      <CarouselSection/>
      <About/>
      <Courses/>
     
     
      </main>
  );
}
