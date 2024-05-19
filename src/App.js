import Aside from "./components/Aside";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Section2 from "./components/Section2";



function App() {
  return (
    <div className=" bg-bg ">
        <div className=" flex  max-w-[1440px]">
            <Aside/>

            <main className="   w-full p-4 pl-1 ml-20">
            <div className=" rounded-3xl bg-white">
                    <Header/>
                    <Hero />
                    <Section2/>
            </div>   

            </main>
        </div>
    </div>
  );
}

export default App;
