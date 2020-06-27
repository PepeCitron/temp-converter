export const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit',
  k: 'Kelvin',
}

export function toCelsiusFromFahrenheit(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9
}
export function toCelsiusFromKelvin(kelvin) {
  return kelvin - 273.15
}

export function toFarenheitFromCelsius(celsius) {
  return (celsius * 9) / 5 + 32
}
export function toFarenheitFromKelvin(kelvin) {
  return (kelvin - 273.15) * (9 / 5) + 32
}

export function toKelvinFromCelsius(celsius) {
  return celsius + 273.15
}
export function toKelvinFromFahrenheit(fahrenheit) {
  return ((fahrenheit + 459.67) / 5) * 9
}

export function tryConvert(temperature, convert) {
  const value = +temperature
  if (Number.isNaN(value)) {
    return ''
  }
  const output = (Math.round(convert(value) * 100) / 100).toString()
  return output
}
