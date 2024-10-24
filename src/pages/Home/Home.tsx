import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import { useState } from "react";
import ContributeForm from "./components/ContributeForm";

const Home = () => {
  const [isContribute, setIsContribute] = useState(false)

  return (
    <section className="min-h-screen flex flex-col">
      <div className="container mx-auto px-4 flex-grow flex flex-col">
        <Header />

        {/* {!isContribute ?  */}
        <Hero setIsContribute={setIsContribute}/> 
        {/* // : */}
         <ContributeForm isContribute={isContribute} setIsContribute={setIsContribute}/>
        {/* //  } */}

        <Footer />
      </div>
    </section>
  );
};

export default Home;
