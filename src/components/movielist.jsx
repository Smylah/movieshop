import React from "react"
import Card from "./card"
import { useGlobalContext } from "./context"

const Movielist = () => {
  const { movies } = useGlobalContext()
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

export default Movielist
