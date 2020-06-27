import React from 'react'
import { scaleNames } from '../utils/temperatureConversion'

export function TemperatureInput({ scale, temperature, onTemperatureChange }) {
  const name = 'scale' + scale
  const scaleName = scaleNames[scale]

  const handleChange = e => {
    onTemperatureChange(e.target.value)
  }

  const handleFocus = e => {
    e.target.select()
  }

  return (
    <>
      <label htmlFor={name}>Température (en {scaleName})</label>
      <input
        type="number"
        id={name}
        value={temperature}
        onChange={handleChange}
        onFocus={handleFocus}
      />
    </>
  )
}
