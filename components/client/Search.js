"use client"
import React from 'react'

const Search = () => {
  return (
    <div>
      <form action="">
      <input type="search" name="" id="" placeholder='Searching...' onChange={(e) => {
        console.log(e.target.value)
      }} />
      </form>
    </div>
  )
}

export default Search
