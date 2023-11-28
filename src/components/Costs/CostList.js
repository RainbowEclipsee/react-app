import CostItem from './CostItem'
import './CostList.css';

const CostList = (props) => {

// Отрисовываем новый массив из существующего через map 
// По мне так тернарным лучше
  let CostItem_Filtered = 
  props.prmArrCosts.length === 0 ? 
  <b style={{color:'#2a5b84'}}> В этом году расходы отсутствуют </b> :
  props.prmArrCosts.map((cost) => (
    <CostItem
      key={cost.id}
      date={cost.date}
      descrition={cost.descrition}
      price={cost.price}
    />
  ))

  return(
    <ul className='cost-list'>{CostItem_Filtered}</ul>
  )

}

export default CostList