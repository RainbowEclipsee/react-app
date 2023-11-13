// import CostItem from './components/CostItem'
import MainCosts from './components/MainCosts'

function App() {
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
      {/* <CostItem
        date={arrCost[0].date}
        descrition={arrCost[0].descrition}
        price={arrCost[0].price}
      />
      <CostItem
        date={arrCost[1].date}
        descrition={arrCost[1].descrition}
        price={arrCost[1].price}
      />
      <CostItem
        date={arrCost[2].date}
        descrition={arrCost[2].descrition}
        price={arrCost[2].price}
      /> */}
    </div>
  )
}

export default App
