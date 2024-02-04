import { Button, Typography } from '@mui/material'
import React from 'react'

const testData = [
  {
    question: "Question 1",
    optionA: "Option A",
    optionB: "Option B",
    optionC: "Option C",
    optionD: "Option D",
    solution: "Option C"
  },
  {
    question: "Question 2",
    optionA: "Option A",
    optionB: "Option B",
    optionC: "Option C",
    optionD: "Option D",
    solution: "Option B"
  },
  {
    question: "Question 3",
    optionA: "Option A",
    optionB: "Option B",
    optionC: "Option C",
    optionD: "Option D",
    solution: "Option A"
  },
  {
    question: "Question 4",
    optionA: "Option A",
    optionB: "Option B",
    optionC: "Option C",
    optionD: "Option D",
    solution: "Option D"
  },
  {
    question: "Question 5",
    optionA: "Option A",
    optionB: "Option B",
    optionC: "Option C",
    optionD: "Option D",
    solution: "Option C"
  },
  {
    question: "Question 6",
    optionA: "Option A",
    optionB: "Option B",
    optionC: "Option C",
    optionD: "Option D",
    solution: "Option B"
  },
  {
    question: "Question 7",
    optionA: "Option A",
    optionB: "Option B",
    optionC: "Option C",
    optionD: "Option D",
    solution: "Option A"
  },
  {
    question: "Question 8",
    optionA: "Option A",
    optionB: "Option B",
    optionC: "Option C",
    optionD: "Option D",
    solution: "Option D"
  },
  {
    question: "Question 9",
    optionA: "Option A",
    optionB: "Option B",
    optionC: "Option C",
    optionD: "Option D",
    solution: "Option C"
  },
  {
    question: "Question 10",
    optionA: "Option A",
    optionB: "Option B",
    optionC: "Option C",
    optionD: "Option D",
    solution: "Option B"
  }
];

const TestView = () => {
  return (
    <div className='p-5 lg:px-20 text-gray-800'>
      {testData.map((item, index) => {
        return (
          <>
            <Typography sx={{ mx: 2 }}>Q{index + 1}. {item.question}</Typography>
            <Button variant='outlined' sx={{ m: 2 }}>A. {item.optionA}</Button>
            <Button variant='outlined' sx={{ m: 2 }}>B. {item.optionB}</Button>
            <Button variant='outlined' sx={{ m: 2 }}>C. {item.optionC}</Button>
            <Button variant='outlined' sx={{ m: 2 }}>D. {item.optionD}</Button>
            <Typography sx={{ mx: 2, mb: 5 }}>Solution : {item.solution}</Typography>
          </>
        )
      })}
    </div>
  )
}

export default TestView