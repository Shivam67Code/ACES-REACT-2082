import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import Card from '../components/Card';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Navbar/>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-6">
          <Card/>
          <Card/>
          <Card/>
        </div>
      </div>
    </div>
  )
}

export default Home