import React from 'react'
import CategoryArea from './Components/CategoryArea/CategoryArea'
import BuyNowArea from './Components/BuyNowArea/BuyNowArea'
import Banner from './Components/Banner/Banner'
import Splite from './Components/Splite/Splite'
import OnlineShop from './Components/OnlineShop/OnlineShop'
import AccordionArea from './Components/AccordionArea/AccordionArea'
import UsersArea from './Components/Users/UsersArea'

const Home = () => {

  return (
    <div>
      <Banner />
      <CategoryArea />
      <UsersArea />
      <Splite />
      <AccordionArea />
      <OnlineShop />
      <BuyNowArea />
    </div>
  )
}

export default Home