import React, { useState } from 'react'
import './CostForm.css'

const CostForm = (props) => {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [date, setDate] = useState('')

  // //userInput - старое состояние | setUserInput - обновленное состояние
  // const [userInput, setUserInput] = useState({
  //   name: '',
  //   price: '',
  //   date: '',
  // })

  const setNameHandler = (event) => {
    setName(event.target.value)
    // setUserInput({
    //   //Старое значение объекта
    //   ...userInput,
    //   //Обновленное
    //   name: event.target.value,
    // })
    // setUserInput((previousState) => {        // <= Более безопсаный подход обновления состояния
    //   return {
    //     ...previousState,
    //     name: event.target.value,
    //   }
    // })
  }
  const setPriceHandler = (event) => {
    setPrice(event.target.value)
    // setUserInput({
    //   ...userInput,
    //   price: event.target.value,
    // })
  }
  const setDateHandler = (event) => {
    setDate(event.target.value)
    // setUserInput({
    //   ...userInput,
    //   date: event.target.value,
    // })
  }

  const submitHandler = (event) => {
    // Что бы страница не перезагружалась
    event.preventDefault()

    //Обновленное состояние
    const costData = {
      descrition: name,
      price: price,
      date: new Date(date),
    }
    //сука. -_-
    //Место на запомнить - нехуй с объектами хуевертить.

    //Передаем данные из дочернего компонента input в родителя NewCost
    props.onSaveCostFormData(costData)
    setName('')
    setPrice('')
    setDate('')
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Наименование</label>
          <input type="text" value={name} onChange={setNameHandler} />
        </div>
        <div className="new-cost__control">
          <label>Сумма</label>
          <input
            type="number"
            onChange={setPriceHandler}
            value={price}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-cost__control">
          <label>Дата</label>
          <input
            type="date"
            onChange={setDateHandler}
            value={date}
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
