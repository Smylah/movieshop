import React, { useEffect, useState } from "react"
import "../styles/css/movies.css"
import axios from "axios"
import Card from "./card"

const Movies = () => {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState("")
  const [sort, setSort] = useState("")
  const [genres, setGenres] = useState("")
  const [page, setPage] = useState(1)
  const [finalSearch, setFinalSearch] = useState("")
  const [loading, setLoading] = useState(true)
  const [totalPages, setTotalPages] = useState("")

  const options = {
    method: "GET",
    url: "https://movies-app1.p.rapidapi.com/api/movies",
    params: {
      limit: "20",
      page: `${page}`,
      query: `${search}`,
      year: `${search}`,
      sort: `${sort}`,
      genres: `${genres}`,
    },
    headers: {
      "X-RapidAPI-Key": "4714148e43msh2cb01ec7dd24e5ep1baeecjsnb03765e8ef6a",
      "X-RapidAPI-Host": "movies-app1.p.rapidapi.com",
    },
  }

  useEffect(() => {
    axios
      .request(options)
      .then((response) => {
        setMovies(response.data.results)
        setTotalPages(response.data.total_pages)
        setLoading(false)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [finalSearch, genres, sort, page])

  const handleSubmit = (e) => {
    e.preventDefault()
    setFinalSearch(search)
  }
  const resetFilters = () => {
    setSearch("")
    setGenres("")
    setSort("")
  }

  const Movielist = () => {
    return (
      <div className="movielist">
        {movies.map((movie) => {
          return (
            <Card
              key={movie.uuid}
              image={movie.image}
              title={movie.titleOriginal}
              description={movie.description}
              release={movie.release}
              rating={movie.rating}
              year={movie.year}
              genre={movie.genres.map((genre) => {
                return `${genre.name}, `
              })}
            />
          )
        })}
      </div>
    )
  }

  return (
    <>
      <div className="form-container">
        <div className="form">
          <form onSubmit={handleSubmit}>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="search by name, year"
            />
            <button>
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

      <section className="movie-container">
        {loading === true ? (
          <div className="loading-background">
            <i class="fa-solid fa-hourglass-empty fa-spin-pulse fa-4x" />
            please wait while we get your favourite movies
          </div>
        ) : movies.length === 0 ? (
          <div className="loading-background">
            <i class="fa-solid fa-trash-can fa-bounce" />
            sorry, your search didnt return any match.
            <a href="">go back</a>
          </div>
        ) : (
          <Movielist />
        )}
      </section>

      <div className="pagination-container">
        <div className="pagination">
          <a href="#" onClick={() => setPage(1)}>
            <i class="fa-solid fa-angles-left" />
            <span> First Page</span>
          </a>

          <a href="#" onClick={() => setPage(page - 5)}>
            <i class="fa-solid fa-angles-left" />
            <span> Last 5</span>
          </a>

          <a href="#" onClick={() => setPage(page - 1)}>
            <i class="fa-solid fa-angle-left" />
            <span> Next </span>
          </a>

          <h4>
            Page {page} of {totalPages}
          </h4>

          <a href="#" onClick={() => setPage(page + 1)}>
            <span> Last </span>
            <i class="fa-solid fa-angle-right" />
          </a>

          <a href="#" onClick={() => setPage(page + 5)}>
            <span>Next 5 </span>
            <i class="fa-solid fa-angles-right" />
          </a>

          <a href="#" onClick={() => setPage(totalPages)}>
            <span>Last Page</span>
            <i class="fa-solid fa-angles-right" />
          </a>
        </div>
      </div>
    </>
  )
}

export default Movies
