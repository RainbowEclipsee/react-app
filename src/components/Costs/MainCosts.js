import Card from '../UI/Card'
import CostItem from './CostItem'
import './MainCosts.css'

const MainCosts = (props) => {
  return (
    <Card className="costs">
      <CostItem
        date={props.prmArrCost[0].date}
        descrition={props.prmArrCost[0].descrition}
        price={props.prmArrCost[0].price}
      />
      <CostItem
        date={props.prmArrCost[1].date}
        descrition={props.prmArrCost[1].descrition}
        price={props.prmArrCost[1].price}
      />
      <CostItem
        date={props.prmArrCost[2].date}
        descrition={props.prmArrCost[2].descrition}
        price={props.prmArrCost[2].price}
      />
    </Card>
  )
}

export default MainCosts
