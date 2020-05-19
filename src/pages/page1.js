import React from 'react'
import imgRight from "../img/illustration-intro.svg"



const Page1 = () => {
  return (
    <div className="container__page1">
      <div className="container__page1__left">
        <h1>Bring everyone <br />
          together to build <br />
          better products.
          </h1>
        <p>
          Manage makes it simple for software temas <br />
        to plan day-to-day tasks while keeping the <br />
        larger team goals in view.

          </p>
      <div className="btn">
        Get Started
        </div>
      </div>
      <div className="container__page1__right">
        <img src={imgRight} alt="" />
      </div>
    </div>

  )
}

export default Page1
