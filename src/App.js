import {React,useState} from 'react'
import TopNav from './Components/TopNav'
import Classcomponent from './Components/Classcomponent';
import Leftnav from './Components/Leftnav';
import Righnav from './Righnav';
import JSX from './Components/JSX';
import SetStateEg from './Components/SetStateEg';
import { Revision } from './Components/Revision';
import RevStateClass from './Components/RevStateClass';
import { Hooks } from './Components/Hooks';
import ParentComp from './Components/ParentComp';
import ScreenParent from './Components/ScreenParent';
import { ChildComp } from './Components/ChildComp';
import { HookUseEffect } from './Components/HookUseEffect';
import { ListRen } from './Components/ListRen';
import ListClassComp from './Components/ListClassComp';
import { ListFunK } from './PracComponents/ListFunK';
const App = () => {
  const [name,setName] = useState("Hooks Concept");
  return (
    <div>
      {/* <TopNav></TopNav>
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

      
      <center>
      <h3>
        Hooks Concepts
        <Hooks gend="male"></Hooks>
      </h3>

      <h2>Method as props Parent Child</h2>
      <ParentComp></ParentComp>
      </center> */}
      
      {/* <ScreenParent></ScreenParent>
      <HookUseEffect></HookUseEffect> */}

      
      
      {/* <ListRen></ListRen>
      <ListClassComp></ListClassComp> */}

      <ListFunK></ListFunK>
      
    
    </div>
  )
}

export default App
