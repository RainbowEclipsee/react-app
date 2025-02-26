import React, {useState} from 'react'
import './NewCost.css'
import CostForm from './CostForm'

import { Cost } from '../Types/types'

interface NewCostProps {
  onSaveNewCostData: (cost: Cost) => void;
}

const NewCost: React.FC<NewCostProps> = (props) => {

  const [isVisibleForm, setIsVisibleForm] = useState(false)

  const saveCostFormDataHandler = (inputCostData: Omit<Cost, 'id'>) => {
    const costData: Cost = {
      ...inputCostData,
      id: Math.random().toString(),
    }
    props.onSaveNewCostData(costData)
    setIsVisibleForm(false)
  }

  return (
    <div className="new-cost">
      {!isVisibleForm && <button onClick={() => setIsVisibleForm(true)}>Добавить расход</button>}
      {isVisibleForm && <CostForm onSaveCostFormData={saveCostFormDataHandler} onCancel={() => setIsVisibleForm(false)}/>}
    </div>
  )
}

export default NewCost
