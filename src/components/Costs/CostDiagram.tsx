import Diagram from '../Diagram/Diagram'
import { Cost, DiagramDataSets } from '../Types/types'

interface CostDiagramProps {
  prmArrCosts: Cost[]
}

const CostDiagram: React.FC<CostDiagramProps> = (props) => {

  const diagramDataSets: DiagramDataSets[] = [
    {label: 'Jan', value: 0},
    {label: 'Feb', value: 0},
    {label: 'Mar', value: 0},
    {label: 'Apr', value: 0},
    {label: 'May', value: 0},
    {label: 'Jun', value: 0},
    {label: 'Jul', value: 0},
    {label: 'Aug', value: 0},
    {label: 'Sep', value: 0},
    {label: 'Oct', value: 0},
    {label: 'Nov', value: 0},
    {label: 'Dec', value: 0},
  ]

// Обрабатываем каждый расход
  for(const cost of props.prmArrCosts) {
    const costMonth = cost.date.getMonth()
    diagramDataSets[costMonth].value += cost.price; // Увеличиваем сумму для соответствующего месяца
  }

  return <Diagram dataSets={diagramDataSets}/>
}

export default CostDiagram
