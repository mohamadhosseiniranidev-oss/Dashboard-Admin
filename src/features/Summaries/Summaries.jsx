import React from 'react'
import SummaryCard from './Components/SummaryCard'
import {generateSummaries} from '../../utils/home'

function Summaries() {
    let summaries = generateSummaries({
        productsLength: 30,
        ticketsLength: 15,
        adminsLength: 4,
        usersLength: 20,
      });

  return (
    <div className='grid grid-cols-1  md:grid-cols-2 xl:grid-cols-4 w-full gap-16  mt-7'>{summaries.map((summary) => (
      <SummaryCard key={summary.id} {...summary} />
    ))}</div>
  )
}

export default Summaries