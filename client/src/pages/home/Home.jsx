import React from 'react'
import Featured from '../../components/Featured/Featured'
import Slide from '../../components/Slide/Slide'
import CatCard from '../../components/CatCard/CatCard';
import {cards} from "../../data"

import "./Home.scss"

const Home = () => {
  return (
    <div className='home'>
      <Featured />
      <Slide slidesToShow={5} arrowsScroll={5}>
      {cards.map(card=>(
        <CatCard key={card.id} item={card} />
      ))}
      </Slide>
    </div>
  )
}

export default Home