import React, { useState } from "react"

const Card = (props) => {
  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
  }

  return (
    <>
      <div onClick={toggleModal} className="card">
        <img src={props.image} alt=""></img>
        <h3>{props.title}</h3>
      </div>

      {modal && (
        <div className="modalBackground">
          <div className="modalContainer">
            <div className="btn-container-mobile">
              <button onClick={toggleModal}>
                <i class="fa-solid fa-x" />
              </button>
            </div>
            <div>
              <img src={props.image} alt="" />
            </div>

            <div>
              <div className="btn-container">
                <button onClick={toggleModal}>
                  <i class="fa-solid fa-x" />
                </button>
              </div>

              <div className="text">
                <h1>{props.title}</h1>
                <h4>Genre: {props.genre}</h4>
                <p>{props.description}</p>
                <h4>Year Released: {props.year}</h4>
                <h4>Rating: {props.rating}</h4>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Card
