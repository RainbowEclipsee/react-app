// import CostItem from './components/CostItem'
import MainCosts from './components/Costs/MainCosts'
import NewCost from './components/NewCost/NewCost'

const App = () => {
  const arrCost = [
    {
      date: new Date(2023, 11, 9),
      descrition: 'Наушники',
      price: 150,
    },
    {
      date: new Date(2023, 11, 9),
      descrition: 'Glock WE 18',
      price: 200,
    },
    {
      date: new Date(2023, 11, 9),
      descrition: 'Ботинки dr.marteens',
      price: 416,
    },
  ]

  return (
    <div>
      <NewCost />
      <MainCosts prmArrCost={arrCost} />
    </div>
  )
}

export default App
