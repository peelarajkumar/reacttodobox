import {React,useState} from 'react'
import TopNav from './Components/TopNav'
import Classcomponent from './Components/Classcomponent';
import Leftnav from './Components/Leftnav';
import Righnav from './Righnav';
import JSX from './Components/JSX';
import SetStateEg from './Components/SetStateEg';
import { Revision } from './Components/Revision';
import RevStateClass from './Components/RevStateClass';
const App = () => {
  const [name,setName] = useState("Hooks Concept");
  return (
    <div>
      <TopNav></TopNav>
      <Classcomponent></Classcomponent>
      <TopNav></TopNav>
      <h2>Hello man welcome to Functional Component with {name}</h2>
      <h1>This Day</h1>
      <Leftnav></Leftnav>
      <Righnav name="Raj"></Righnav>
      <Righnav name="Tej"></Righnav>
      <JSX></JSX>
      <Classcomponent heroname="Batman">
        <p>This is child for batman</p>
      </Classcomponent>
      <Classcomponent heroname="Superman">
        <p>This is child for superman</p>
      </Classcomponent>

      <SetStateEg></SetStateEg>


      <Revision nick="pride"></Revision>
      <RevStateClass  new="Hello I'm Props" >
        <p>I am Prop Children</p>
      </RevStateClass>
      
      
      
      
    
    </div>
  )
}

export default App
