import React from 'react'
import ProduuctsList from '../Components/ProduuctsList/ProduuctsList'
import Catigouries from '../Components/Catigouries/Catigouries'
import Navbar from '../Components/Navbar/Navbar'

function Home() {

  return (
    <div>
      <Navbar/>
      <Catigouries />
      <ProduuctsList/>
    </div>
  )
}

export default Home