import React from "react"
import { useState, useContext, useEffect } from "react"
import axios from "axios"

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState("")
  const [sort, setSort] = useState("")
  const [genres, setGenres] = useState("")
  const [page, setPage] = useState(1)
  const [finalSearch, setFinalSearch] = useState("")
  const [loading, setLoading] = useState(true)
  const [totalPages, setTotalPages] = useState("")

  useEffect(() => {
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

  return (
    <AppContext.Provider
      value={{
        movies,
        search,
        setSearch,
        sort,
        setSort,
        genres,
        setGenres,
        page,
        setPage,
        setFinalSearch,
        loading,
        totalPages,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
