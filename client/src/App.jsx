import Canvas from "./canvas";
import Customizer from "./pages/customizer";
import Home from "./pages/Home";



function App() {
 
  return (
    <main className="app transition-all ease-in">
      <Home />
      <Canvas />
      <Customizer />
    </main>
  )
}

export default App
