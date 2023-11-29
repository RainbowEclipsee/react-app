import Card from '../UI/Card'
import CostsFilter from './CostsFilter'
import './MainCosts.css'
import React, { useState } from 'react'
import CostList from './CostList'
import CostDiagram from './CostDiagram'


const MainCosts = (props) => {
  const [changeYear, setChangeYear] = useState('2020')
  //Д.С changeYear передавая как сток значение 2020
  const yearChangeHandler = (setYear) => {
    //Достигаем двустроннего связвания
    setChangeYear(setYear)
  }

  //Фильтр по дате массива
  const arrCostsFilter = props.prmArrCosts.filter(cost => {
    return cost.date.getFullYear().toString() === changeYear;
  })


  return (
    <div>
      <Card className="costs">
        {/* Д.С year={changeYear} */}
        <CostsFilter year={changeYear} onChangeYear={yearChangeHandler} />
        <CostDiagram prmArrCosts={arrCostsFilter}/>
        <CostList prmArrCosts={arrCostsFilter}/>
        {/* <Было так, так - не делаем> */
        /* <CostItem
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
        /> */}
      </Card>
    </div>
  )
}

export default MainCosts
