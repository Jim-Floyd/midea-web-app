import './App.css'
import FetchCSVData from './g-sheet-db/g-sheet-models.jsx'
import FetchCSVDataMan from './g-sheet-db/g-sheet-managers'




const App = () => {
  return (
    <>
      <h1 >MODELS</h1>
     
     {/* {FetchCSVData()} */}
     {/* <FetchCSVDataMan/> */}
     <FetchCSVData/>
     
      
    </>
  )
}

export default App
