import React, { useState } from 'react'

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit',
}

function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9
}

function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32
}

function BoilingVerdict({ celsius }) {
  if (celsius >= 100) {
    return <div>L'eau bout</div>
  }
  return <div>L'eau ne bout pas</div>
}

function tryConvert(temperature, convert) {
  const value = +temperature
  if (Number.isNaN(value)) {
    return ''
  }
  const output = (Math.round(convert(value) * 100) / 100).toString()
  return output
}

function TemperatureInput({ scale, temperature, onTemperatureChange }) {
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

function Calculator() {
  const [temperature, setTemperature] = useState(0)
  const [scale, setScale] = useState('c')

  const celsius =
    scale === 'c' ? temperature : tryConvert(temperature, toCelsius)
  const fahrenheit =
    scale === 'f' ? temperature : tryConvert(temperature, toFahrenheit)

  const handleCelsiusChange = temperature => {
    setScale('c')
    setTemperature(temperature)
  }

  const handleFahrenheitChange = temperature => {
    setScale('f')
    setTemperature(temperature)
  }

  return (
    <div>
      <TemperatureInput
        scale="c"
        temperature={celsius}
        onTemperatureChange={handleCelsiusChange}
      />
      <TemperatureInput
        scale="f"
        temperature={fahrenheit}
        onTemperatureChange={handleFahrenheitChange}
      />
      <BoilingVerdict celsius={celsius} />
    </div>
  )
}

export function App() {
  return (
    <div className="App">
      <Calculator />
    </div>
  )
}
