import './NewCost.css'
import CostForm from './CostForm'

const NewCost = (props) => {
  const saveCostFormDataHandler = (inputCostData) => {
    const costData = {
      ...inputCostData,
      id: Math.random().toString(),
    }
    props.onSaveNewCostData(costData)
  }

  return (
    <div className="new-cost">
      <CostForm onSaveCostFormData={saveCostFormDataHandler} />
    </div>
  )
}

export default NewCost
