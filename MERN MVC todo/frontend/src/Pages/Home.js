import React from 'react';


import Navbar from '../Components/Navbar/Navbar';
import Todo from '../Components/Todo/Todo';
import Footer from '../Components/Footer/Footer'



function Home() {
  return (
    <div>
      <Navbar />
      <Todo />
      <Footer />
    </div>
  )
}

export default Home
