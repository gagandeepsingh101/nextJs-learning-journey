"use client"
import React from 'react'

const Contact = ({childern,value}) => {
  return (
    <div>
    <h1>Contact Page</h1>
    <h3>{value}</h3>
    {childern}
    </div>
  )
}

export default Contact
