import React from 'react'
import "./components.css"

function HangmanDrawing() {
  return (
    <>
    <div className={"drawing-wrapper"}>
    <div className={"drawing-top-bar"} />
    <div className={"drawing-horizontal-bar"} />
      <div className={"drawing-bottom-bar"} />
    </div>
    </>
  )
}

export default HangmanDrawing