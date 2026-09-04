import Image from "next/image";
import Services from './components/Services/page'
import Problem from "./components/Problem/page";
import Solution from './components/Solution/page'
import KpiSection from "./components/Kpi/page";
import Header from "./components/Header/page";

import Client from './components/Client/page';
import WhyChooseUs from "./components/WhyChoose/page";
import TestimonialsSection from "./components/Testimonial/page";
import ContactSection from "./components/Contact/page";
import Footer from "./components/Footer/page";


export default function Home() {
  return (

<>


    <main className="min-h-screen bg-white">
      <Header/>
     <Problem/>
   
     <Services/>
     <KpiSection/>
     <WhyChooseUs/>
     <Solution/>
     <TestimonialsSection/>
     <Client/>
     <ContactSection/>
     <Footer/>
    </main>

    </>
  
  );
}
