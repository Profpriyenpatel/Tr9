
import React from 'react'

export default function Home() {
    const username=localStorage.getItem("username");
  return (
    <div className="scrolling-container">
    <h1><marquee> Welcome, {username} !</marquee></h1>
  </div>
  )
}
