import Card from '../UI/Card'
import CostsFilter from './CostsFilter'
import './MainCosts.css'
import React, { useState } from 'react'
import CostList from './CostList'
import CostDiagram from './CostDiagram'

import { Cost } from '../Types/types'

interface MainCostsProps {
  prmArrCosts: Cost[];
}

const MainCosts: React.FC<MainCostsProps> = ({prmArrCosts}) => {
  const [changeYear, setChangeYear] = useState<string>('2020')

  const yearChangeHandler = (setYear: string) => {
    setChangeYear(setYear)
  }

  const arrCostsFilter = prmArrCosts.filter(cost => {
    return cost.date.getFullYear().toString() === changeYear;
  })


  return (
    <div>
      <Card className="costs">
        <CostsFilter year={changeYear} onChangeYear={yearChangeHandler} />
        <CostDiagram prmArrCosts={arrCostsFilter}/>
        <CostList prmArrCosts={arrCostsFilter}/>
      </Card>
    </div>
  )
}

export default MainCosts
