import About from "@/components/About";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import PopularRecipes from "@/components/PopularRecipes";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <PopularRecipes />
      <About />
    </>
  );
}
