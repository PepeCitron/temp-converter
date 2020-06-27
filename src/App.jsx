import React, { useState } from 'react'

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit',
  k: 'Kelvin',
}

function toCelsiusFromFahrenheit(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9
}
function toCelsiusFromKelvin(kelvin) {
  return kelvin - 273.15
}

function toFarenheitFromCelsius(celsius) {
  return (celsius * 9) / 5 + 32
}
function toFarenheitFromKelvin(kelvin) {
  return (kelvin - 273.15) * (9 / 5) + 32
}

function toKelvinFromCelsius(celsius) {
  return celsius + 273.15
}
function toKelvinFromFahrenheit(fahrenheit) {
  return ((fahrenheit + 459.67) / 5) * 9
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
    scale === 'f'
      ? tryConvert(temperature, toCelsiusFromFahrenheit)
      : scale === 'k'
      ? tryConvert(temperature, toCelsiusFromKelvin)
      : temperature
  const fahrenheit =
    scale === 'c'
      ? tryConvert(temperature, toFarenheitFromCelsius)
      : scale === 'k'
      ? tryConvert(temperature, toFarenheitFromKelvin)
      : temperature
  const kelvin =
    scale === 'c'
      ? tryConvert(temperature, toKelvinFromCelsius)
      : scale === 'f'
      ? tryConvert(temperature, toKelvinFromFahrenheit)
      : temperature

  const handleCelsiusChange = temperature => {
    setScale('c')
    setTemperature(temperature)
  }

  const handleFahrenheitChange = temperature => {
    setScale('f')
    setTemperature(temperature)
  }

  const handleKelvinChange = temperature => {
    setScale('k')
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
      <TemperatureInput
        scale="k"
        temperature={kelvin}
        onTemperatureChange={handleKelvinChange}
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
