import Card from '../UI/Card'
import CostItem from './CostItem'
import CostsFilter from './CostsFilter'
import './MainCosts.css'
import React, { useState } from 'react'

const MainCosts = (props) => {
  const [selectedYear, setSelectedYear] = useState('2023')

  const yearChangeHandler = (year) => {
    // console.log(year)
    setSelectedYear(year)
    console.log('MainCost component')
  }

  return (
    <div>
      <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler} />
      <Card className="costs">
        <CostItem
          date={props.prmArrCost[0].date}
          descrition={props.prmArrCost[0].descrition}
          price={props.prmArrCost[0].price}
        />
        <CostItem
          date={props.prmArrCost[1].date}
          descrition={props.prmArrCost[1].descrition}
          price={props.prmArrCost[1].price}
        />
        <CostItem
          date={props.prmArrCost[2].date}
          descrition={props.prmArrCost[2].descrition}
          price={props.prmArrCost[2].price}
        />
      </Card>
    </div>
  )
}

export default MainCosts
