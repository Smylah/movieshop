import React from "react"
import { useGlobalContext } from "./context"

const NavButtons = () => {
  const { page, setPage, totalPages } = useGlobalContext()
  return (
    <div>
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
    </div>
  )
}

export default NavButtons
