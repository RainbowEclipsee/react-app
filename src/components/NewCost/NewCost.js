import React, {useState} from 'react'
import './NewCost.css'
import CostForm from './CostForm'

const NewCost = (props) => {

  const [isVisibleForm, setIsVisibleForm] = useState(false)

  const saveCostFormDataHandler = (inputCostData) => {
    const costData = {
      ...inputCostData,
      id: Math.random().toString(),
    }
    props.onSaveNewCostData(costData)
    setIsVisibleForm(false)
  }

  const btnCreateForm = () => {
    setIsVisibleForm(true)
  }

  const btnCancelForm = () => {
    setIsVisibleForm(false)
  }

  return (
    <div className="new-cost">
      {!isVisibleForm && <button onClick={btnCreateForm}>Добавить расход</button>}
      {isVisibleForm && <CostForm onSaveCostFormData={saveCostFormDataHandler} onCancel={btnCancelForm}/>}
    </div>
  )
}

export default NewCost
