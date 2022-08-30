import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import Footer from "./components/footer"
import MoviePage from "./components/MoviePage"
import Movies from "./components/movies"
import Navbar from "./components/navbar"

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/movieshop" element={<Movies />}>
            <Route path="/movieshop/:movieid" element={<MoviePage />} />
          </Route>
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
