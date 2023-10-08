import React from 'react'
import { Link } from "react-router-dom";

const SolutionsCard = ({ id, icon, heading, text }) => {
  return (
    <div className="solutionsCard">
    <img src={icon} alt={heading} />
    <p className="heading">{heading}</p>
    <p className="text">{text}</p>
    <Link to={`/solutions/${id}`}>Read More</Link>
  </div>
  )
}

export default SolutionsCard
