import Card from '../UI/Card'
import CostItem from './CostItem'
import CostsFilter from './CostsFilter'
import './MainCosts.css'
import React, { useState } from 'react'

const MainCosts = (props) => {
  const [changeYear, setChangeYear] = useState('2020')
  //Д.С changeYear передавая как сток значение 2020
  const yearChangeHandler = (setYear) => {
    //Достигаем двустроннего связвания
    setChangeYear(setYear)
  }

  return (
    <div>
      <Card className="costs">
        {/* Д.С year={changeYear} */}
        <CostsFilter year={changeYear} onChangeYear={yearChangeHandler} />
        {/* Отрисовываем новый массив из существующего через map */}
        {props.prmArrCosts.map((cost) => (
          <CostItem
            date={cost.date}
            descrition={cost.descrition}
            price={cost.price}
          />
        ))}
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
