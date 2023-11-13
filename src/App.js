// import CostItem from './components/CostItem'
import MainCosts from './components/Costs/MainCosts'

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
      <h1>Start Page</h1>
      <MainCosts prmArrCost={arrCost} />
    </div>
  )
}

export default App
