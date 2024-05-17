import Aside from "./components/Aside";
import Header from "./components/Header";



function App() {
  return (
    <div className=" flex">
        <Aside/>

        <main className=" bg-bg  w-full p-2">
           <div className=" rounded-3xl bg-white">
                <Header/>
           </div>   

           <div>

           </div>
        </main>
    </div>
  );
}

export default App;
