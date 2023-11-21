// import CostItem from './components/CostItem'
import MainCosts from './components/Costs/MainCosts'
import NewCost from './components/NewCost/NewCost'
import React, { useState } from 'react'

const arrCosts = [
  {
    id: '1',
    date: new Date(2023, 11, 9),
    descrition: 'Наушники',
    price: 150,
  },
  {
    id: '2',
    date: new Date(2023, 11, 9),
    descrition: 'Glock WE 18',
    price: 200,
  },
  {
    id: '3',
    date: new Date(2023, 11, 9),
    descrition: 'Ботинки dr.marteens',
    price: 416,
  }
]

const App = () => {
  const [costs, setCosts] = useState(arrCosts)

  const saveNewCostDataHandler = (cost) => {
    setCosts((prevCosts) => {
      return [cost, ...prevCosts]
    })
  }

  return (
    <div>
      <NewCost onSaveNewCostData={saveNewCostDataHandler} />
      <MainCosts prmArrCosts={costs} />
    </div>
  )
}

export default App
