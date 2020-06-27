import React from 'react'

export function BoilingVerdict({ celsius }) {
  if (celsius >= 100) {
    return <div>L'eau bout</div>
  }
  return <div>L'eau ne bout pas</div>
}
