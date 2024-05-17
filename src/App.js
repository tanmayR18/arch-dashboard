import Aside from "./components/Aside";
import Header from "./components/Header";
import Hero from "./components/Hero";



function App() {
  return (
    <div className=" flex bg-bg h-screen">
        <Aside/>

        <main className="   w-full p-4 pl-1 ml-20">
           <div className=" rounded-3xl bg-white">
                <Header/>
                <Hero />
           </div>   

           <div>

           </div>
        </main>
    </div>
  );
}

export default App;
