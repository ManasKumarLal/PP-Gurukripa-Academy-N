import './CardsPage.css';
import React from 'react'
import Card from './Card'

const CardsPage = () => {
  return (
    <div className={`cards_page w-full flex flex-wrap items-center justify-center gap-8 py-[4rem] px-[2vmax] bg-[#ECECEC]`}>
      <Card border="border-[#E9173C]" bg="bg-[#E9173C]" />
      <Card border="border-[#2282FB]" bg="bg-[#2282FB]" />
      <Card border="border-[#0CBB5C]" bg="bg-[#0CBB5C]" />
    </div>
  )
}

export default CardsPage 
