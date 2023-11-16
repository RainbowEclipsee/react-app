import './NewCost.css'
import CostForm from './CostForm'

const NewCost = (props) => {
  const saveCostFormDataHandler = (inputCostData) => {
    console.log(inputCostData)
    props.onSaveNewCostData(inputCostData)
  }

  return (
    <div className="new-cost">
      <CostForm onSaveCostFormData={saveCostFormDataHandler} />
    </div>
  )
}

export default NewCost
