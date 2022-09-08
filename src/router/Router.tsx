import React from 'react'
import {Route ,Routes,Navigate} from "react-router-dom"
import Layout from '../layout/Layout'
import Home from '../pages/home/Home'
export default function Router() {
  return (
    <Routes>
        <Route element={<Layout/>}>
            <Route path='/home' element={<Home/>}/>
            <Route path='*'element={<Navigate to="/home"/>}/>
        </Route>
    </Routes>
  )
}
