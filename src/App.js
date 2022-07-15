import "./App.css"
import Footer from "./components/footer"
import Movies from "./components/movies"
import Navbar from "./components/navbar"

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Movies />
      <Footer />
    </div>
  )
}

export default App
