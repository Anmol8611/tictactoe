import React from 'react'
import './ScoreBoard.css'

const ScoreBoard = ({xScore, oScore, tie, playing}) => {
  return (
    <div className='scoreBoard'>
        <span className={`x-score ${playing === true ? "xPlay" : ""}`}>X - {xScore}</span>
        <span className={`o-score ${playing === false ? "oPlay" : ""}`}>O - {oScore}</span>
        <span className='tie-score'>Tie - {tie}</span>
    </div>
  )
}

export default ScoreBoard