import Navbar       from "@/components/Navbar/Navbar";
import Hero         from "@/components/Hero/Hero";
import Stats        from "@/components/Stats/Stats";
import Programs     from "@/components/Programs/Programs";
import Admissions   from "@/components/Admissions/Admissions";
import Headquarters from "@/components/Headquarters/Headquarters";
import Partners     from "@/components/Partners/Partners";
import Footer       from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Programs />
        <Admissions />
        <Headquarters />
        <Partners />
      </main>
      <Footer />
    </>
  );
}
