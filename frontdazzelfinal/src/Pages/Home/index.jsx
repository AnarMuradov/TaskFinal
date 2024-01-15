import React from 'react'
import DownloadSection from '../../Components/HomeSections/DownloadSection'
import FetchSection from '../../Components/HomeSections/FetchSection'
import { Helmet } from 'react-helmet-async'
import Slider from '../../Components/HomeSections/SliderSection'

const Home = () => {
  return (
    <>
    <Helmet>
      <title>
        Home
      </title>
    </Helmet>
    <main>
      <Slider/>
      <DownloadSection/>
      <FetchSection/>

    </main>
    </>
  )
}

export default Home