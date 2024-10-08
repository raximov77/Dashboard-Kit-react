import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {Overview,Agents,Articles,Contacts,Ideas,Settings,Subscription,Tickets,NotFoundPage} from "../pages"
import Header from '../components/Header'

function Routers() {
  return (
   <div className='w-[80%] p-[30px] bg-[#F7F8FC]'>
    <Header/>
    <Routes>
      <Route path='/' element={<Overview/>}/>
      <Route path='/tickets' element={<Tickets/>}/>
      <Route path='/ideas' element={<Ideas/>}/>
      <Route path='/contacts' element={<Contacts/>}/>
      <Route path='/agents' element={<Agents/>}/>
      <Route path='/articles' element={<Articles/>}/>
      <Route path='/settings' element={<Settings/>}/>
      <Route path='/subscription' element={<Subscription/>}/>
      <Route path='*' element={<NotFoundPage/>}/>
    </Routes>
   </div>
  )
}

export default Routers