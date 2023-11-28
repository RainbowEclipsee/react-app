import './CostItem.css'
import CostDate from './CostDate'
import Card from '../UI/Card'

const CostItem = (props) => {
  // let descrition = props.descrition

  return (
    <li>
      <Card className="cost-item">
        <CostDate date={props.date} />
        <div className="cost-item_descrition">
          <h2>{props.descrition}</h2>
          <div className="cost-item_price">${props.price}</div>
        </div>
      </Card>
    </li>
  )
}

export default CostItem
