import DiagramBar from './DiagramBar'
import './Diagram.css'

import { DiagramDataSets } from '../Types/types'

interface DiagramProps {
  dataSets: DiagramDataSets[]
}

const Diagram: React.FC<DiagramProps> = (props) => {

  const dataSetsValues = props.dataSets.map(dataSet => dataSet.value)

  const maxMonthCosts = Math.max(...dataSetsValues)

  return (
    <div className="diagram">
      {props.dataSets.map((dataSet) => (
        <DiagramBar
          key={dataSet.label}
          value={dataSet.value}
          maxValue={maxMonthCosts}
          label={dataSet.label}
        />
      ))}
    </div>
  )
}

export default Diagram
