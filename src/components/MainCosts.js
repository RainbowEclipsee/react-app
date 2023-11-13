import CostItem from './CostItem'
import './MainCosts.css'

function MainCosts(props) {
  return (
    <div className="costs">
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
    </div>
  )
}

export default MainCosts
