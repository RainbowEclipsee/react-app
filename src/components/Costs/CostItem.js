import './CostItem.css'
import CostDate from './CostDate'
import Card from '../UI/Card'

const CostItem = (props) => {
  const changeDescrHandler = () => {
    console.log('click!')
  }
  return (
    <Card className="cost-item">
      <CostDate date={props.date} />
      <div className="cost-item_descrition">
        <h2>{props.descrition}</h2>
        <div className="cost-item_price">${props.price}</div>
      </div>
      <button onClick={changeDescrHandler}>Изменить описание</button>
    </Card>
  )
}

export default CostItem
