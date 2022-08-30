import React from "react"
import "../styles/css/movies.css"

import { useGlobalContext } from "./context"

import NavButtons from "./navButton"
import Movielist from "./movielist"

const Movies = () => {
  const { movies, loading } = useGlobalContext()

  return (
    <>
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

      <NavButtons />
    </>
  )
}

export default Movies
