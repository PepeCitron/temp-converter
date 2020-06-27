import React, { useState } from 'react'
import {
  toCelsiusFromFahrenheit,
  toCelsiusFromKelvin,
  toFarenheitFromCelsius,
  toFarenheitFromKelvin,
  toKelvinFromCelsius,
  toKelvinFromFahrenheit,
  tryConvert,
} from '../utils/temperatureConversion'
import { TemperatureInput } from './TemperatureInput'
import { BoilingVerdict } from './BoilingVerdict'

export function Calculator() {
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
