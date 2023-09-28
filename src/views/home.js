import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Future Communications Analyst</title>
        <meta property="og:title" content="Future Communications Analyst" />
      </Helmet>
    </div>
  )
}

export default Home
