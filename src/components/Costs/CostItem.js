import './CostItem.css'
import CostDate from './CostDate'
import Card from '../UI/Card'
import React, { useState } from 'react'

const CostItem = (props) => {
  // let descrition = props.descrition

  let [descrition, setDescription] = useState(props.descrition)

  const changeDescrHandler = () => {
    setDescription('new Value')
    console.log(descrition)
  }
  return (
    <Card className="cost-item">
      <CostDate date={props.date} />
      <div className="cost-item_descrition">
        <h2>{descrition}</h2>
        <div className="cost-item_price">${props.price}</div>
      </div>
      <button onClick={changeDescrHandler}>Изменить описание</button>
    </Card>
  )
}

export default CostItem
