import React from 'react'
import Jumbotron from '../../components/Jumbotron/Jumbotron'
import {homepageContent} from './HomePageContent'

function HomePage() {

  return (
    <>
      <section id="hero">
        <Jumbotron
        h1={homepageContent[0].jumbotronH1}
        p={homepageContent[0].jumbotronP} />
      </section>
    </>
  )
}

export default HomePage