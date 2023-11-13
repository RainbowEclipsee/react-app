import CostDate from './CostDate'
import './CostItem.css'

function CostItem(props) {
  return (
    <div className="cost-item">
      <CostDate date={props.date} />
      <div className="cost-item_descrition">
        <h2>{props.descrition}</h2>
        <div className="cost-item_price">${props.price}</div>
      </div>
    </div>
  )
}

export default CostItem
