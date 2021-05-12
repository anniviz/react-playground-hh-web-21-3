import React, { useState } from 'react'
import './App.css'

export default () => {
  const [size, setSize] = useState(100)
  const [colorHue, setColorHue] = useState(100)
  const style = {
    width: size + 'px',
    height: size + 'px',
    background: 'hsl(' + colorHue + ', 100%, 50%)',
  }
  return (
    <div className="App">
      <label>
        Size:
        <input
          value={size}
          onChange={handleSizeChange}
          type="range"
          max="200"
        />
      </label>
      <label>
        Color:
        <input
          value={colorHue}
          onChange={handleColorChange}
          type="range"
          max="360"
        />
      </label>
      <div style={style} className="Box" />
    </div>
  )
  function handleSizeChange(event) {
    const input = event.target
    setSize(input.value)
  }

  function handleColorChange(event) {
    const input = event.target
    setColorHue(input.value)
  }
}
