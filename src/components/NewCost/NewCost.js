import React, {useState} from 'react'
import './NewCost.css'
import CostForm from './CostForm'

const NewCost = (props) => {

  const [formVisible, setFormVisible] = useState(false)

  const saveCostFormDataHandler = (inputCostData) => {
    const costData = {
      ...inputCostData,
      id: Math.random().toString(),
    }
    props.onSaveNewCostData(costData)
  }

  const inputCostDataHandler = () => {
    setFormVisible(true)
  }

  const cancelCostHandler = () => {
    setFormVisible(false)
  }

  return (
    <div className="new-cost">
      {!formVisible && <button onClick={inputCostDataHandler}>Добавить новый расход</button>}
      {formVisible && <CostForm onSaveCostFormData={saveCostFormDataHandler} onCancel={cancelCostHandler}/>}
    </div>
  )
}

export default NewCost
