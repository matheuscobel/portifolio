import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Strengths from "@/components/Strengths";
import { Analytics } from "@vercel/analytics/next"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-black">
        <Header />
        <Projects />
        <Experience />
        <Strengths />
      </main>
      <Footer />
      <Analytics />
    </>
  );
}
