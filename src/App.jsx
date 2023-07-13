import './App.css'
import Button from './components/Button/Index.jsx'
import CardContainer from './components/CardContainer/CardContainer'
import { useState } from 'react'


function App() {
  const [lift, setlift] = useState(false);

  return (
    <>
      <Button handleClick={() => setlift(!lift)} >Get All Users</Button>
      <CardContainer liftState={lift}/>
    </>
  )
}

export default App
