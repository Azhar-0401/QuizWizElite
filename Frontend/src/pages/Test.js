import React from 'react'
import FullScreenButton from '../components/FullScreenButton'
import { Button, Typography } from '@mui/material'

const Test = () => {
  return (
    <div className='flex justify-center flex-col items-center text-2xl relative font-medium text-gray-700'>

      <div className='w-full flex justify-between p-5'><FullScreenButton /> <span className='text-lg'>2/10</span></div>
      <div className='m-5 lg:w-2/3 leading-10 tracking-wide'>
        <p>Q1. Question 1 : Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab eos doloremque commodi tenetur voluptates quibusdam officia quod nulla voluptatem sequi odio maxime vitae ad nihil, labore numquam corporis alias rerum est nemo soluta magnam quo at? Labore autem dolorum dignissimos.</p>
        <div className='flex flex-wrap justify-center items-center m-4'>
          <Button variant='outlined' size={'large'} sx={{ m: 2, width: "40%", fontWeight: "600", fontSize: "17px" }}>A. Option A</Button>
          <Button variant='outlined' size={'large'} sx={{ m: 2, width: "40%", fontWeight: "600", fontSize: "17px" }}>B. Option B</Button>
          <Button variant='outlined' size={'large'} sx={{ m: 2, width: "40%", fontWeight: "600", fontSize: "17px" }}>C. Option C</Button>
          <Button variant='outlined' size={'large'} sx={{ m: 2, width: "40%", fontWeight: "600", fontSize: "17px" }}>D. Option D</Button>
        </div>
      </div>
    </div>
  )
}

export default Test