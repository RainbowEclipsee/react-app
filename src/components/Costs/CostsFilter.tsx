import React from 'react'
import './CostsFilter.css'

interface CostsFilterProps {
  year: string,
  onChangeYear: (year: string) => void
}

const CostsFilter: React.FC<CostsFilterProps> = (props) => {
  const changeYearHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    props.onChangeYear(event.target.value)
  }

  return (
    <div className="costs-filter">
      <div className="costs-filter__control">
        <label>Выбор по году</label>
        {/* Подвязываем Д.С нашего changeYear из MainCost */}
        <select value={props.year} onChange={changeYearHandler}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  )
}

export default CostsFilter
