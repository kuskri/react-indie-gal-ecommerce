import React from "react"
//components
import HeroComponent from "../components/HeroComponent"
import RecentlyRestocked from "../components/RecentlyRestocked"
import CategoriesGrid from "../components/CategoriesGrid"
import Bestsellers from "../components/Bestsellers"

function Home() {
  return (
    <div>
      <HeroComponent />
      <RecentlyRestocked />
      <CategoriesGrid />
      <Bestsellers />
    </div>
  )
}

export default Home
