import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import ExploreMenu from '../components/ExploreMenu'

const Home = () => {
  const [category, setCategory] = useState('All')

  return (
    <div>
      <Navbar />
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
    </div>
  );
}

export default Home