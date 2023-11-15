import React, { useState } from 'react'
import './CostForm.css'

const CostForm = () => {
  // const [name, setName] = useState('')
  // const [price, setPrice] = useState('')
  // const [date, setDate] = useState('')

  const [userInput, setUserInput] = useState({
    name: '',
    price: '',
    date: '',
  })

  const setNameHandler = (event) => {
    // setName(event.target.value)
    setUserInput({
      //Старое значение объекта
      ...userInput,
      //Обновленное
      name: event.target.value,
    })
  }
  const setPriceHandler = (event) => {
    // setPrice(event.target.value)
    setUserInput({
      ...userInput,
      price: event.target.value,
    })
  }
  const setDateHandler = (event) => {
    // setDate(event.target.value)
    setUserInput({
      ...userInput,
      date: event.target.value,
    })
  }

  return (
    <form>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Наименование</label>
          <input type="text" onChange={setNameHandler} />
        </div>
        <div className="new-cost__control">
          <label>Сумма</label>
          <input
            type="number"
            onChange={setPriceHandler}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-cost__control">
          <label>Дата</label>
          <input
            type="date"
            onChange={setDateHandler}
            min="2023-01-01"
            step="2025-12-31"
          />
        </div>
        <div className="new-cost__actions">
          <button type="submit">Добавить Расход</button>
        </div>
      </div>
    </form>
  )
}
export default CostForm
