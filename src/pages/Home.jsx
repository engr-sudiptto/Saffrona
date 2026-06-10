import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import ExploreMenu from '../components/ExploreMenu'
import FoodDisplay from '../components/FoodDisplay'
import AppDownload from '../components/AppDownload'

const Home = () => {
  const [category, setCategory] = useState('All')

  return (
    <div>
      <Navbar />
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppDownload/>
    </div>
  );
}

export default Home