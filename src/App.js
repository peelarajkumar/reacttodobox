import {React,useState} from 'react'
import TopNav from './Components/TopNav'
import Classcomponent from './Components/Classcomponent';

const App = () => {
  const [name,setName] = useState("Hooks Concept");
  return (
    <div>
      <TopNav></TopNav>
      <Classcomponent></Classcomponent>
      <TopNav></TopNav>
      <h2>Hello man welcome to Functional Component with {name}</h2>
      
      
    
    </div>
  )
}

export default App
