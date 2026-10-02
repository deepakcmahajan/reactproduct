import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Welcome } from './Welcome.jsx'
import { UserCard } from './Usercard.tsx'
import { Card } from './Card.jsx'
import { Button } from './Button.tsx'
import { Link, Routes, Route } from 'react-router-dom'
import Login from './Login.jsx'
import LoginNew from './LoginNew.jsx'
import Contacts from './Contacts.jsx'
import Grandpa from './Proptest.jsx'
import States from './States.jsx'
import Timer from './Timer.jsx'
import PropsPassing from './propsc/PropsPassing.jsx'
import React,{ Suspense } from 'react'
import { UserContext } from './UserCtext.jsx'
import Consum from './Consum.jsx'


//import { Suspense, lazy } from 'react';
function App() {
   
 /* const Lgn = React.lazy(() =>
   import("./Login.jsx"))*/
    const [name,setName] = useState("Jagruti");
  return (
    <>
      {/* <div>
      <h1>My Test</h1>
      <div style={{ display: 'flex', gap: '10px', border: '2px solid blue', textAlign: 'left' }}>
        <div style={{ border: '2px solid red', textAlign: 'left' }}>
          <Link to="/LoginNew">Login</Link>
        </div>
        <div style={{ border: '2px solid red', textAlign: 'left' }}>
          <Link to="/Contacts">Contacts</Link>
        </div>
        <div style={{ border: '2px solid red', textAlign: 'left' }}>
        <Link to="/States">States</Link>
        </div>
      </div>
    </div>

     <Routes>
        <Route path="/login" element={<LoginNew />}></Route>
        <Route path="/Contacts" element={<Contacts />}></Route>
        <Route path="/States" element={<States />}></Route>
      </Routes> */}

{/*}
   <Suspense fallback={<div>Loading...</div>}>
        <Lgn />
         </Suspense>*/}
      
  

      <UserContext.Provider value={{name,setName}}>

                   <h2> Parent :{name}</h2>
     <Consum />
     </UserContext.Provider>

    </>
  )
}

export default App
