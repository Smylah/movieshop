import React from "react"
import "../styles/css/nav.css"
import { useGlobalContext } from "./context"

const Navbar = () => {
  const { search, setSearch, setSort, setGenres, setFinalSearch } =
    useGlobalContext()

  const handleSubmit = (e) => {
    e.preventDefault()
    setFinalSearch(search)
  }

  return (
    <nav>
      <div className="logo-container">
        <div className="logo">Movieshop</div>
      </div>

      <div className="form-container">
        <div className="form radius">
          <form className="display" onSubmit={handleSubmit}>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="search by name..."
            />
            <button
              style={{
                borderRadius: "0 20px 20px 0",
                marginLeft: "-30px",
                background: "white ",
              }}
            >
              <i class="fa-solid fa-magnifying-glass" />
            </button>
          </form>

          <form>
            <label>filter by </label>
            <select onChange={(e) => setSort(e.target.value)}>
              <option value="title">Title</option>
              <option value="Year">Year</option>
              <option value="rating">Rating</option>
            </select>
          </form>

          <form>
            <label> filter by Genre </label>
            <select onChange={(e) => setGenres(e.target.value)}>
              <option value="drama">Drama</option>
              <option value="accion">Action</option>
              <option value="crimen">Crime</option>
            </select>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
