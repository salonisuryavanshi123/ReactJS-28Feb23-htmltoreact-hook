//1. Import Area
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/ui/Layout'
import Dashboard from './Dashboard'
import Login from './Login'

//2. Defination Area
export default function App() {
    //2.1 Hook Area

    //2.2 Function Defination Area

    //2.3 Return Statement
    // Every function return something
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route path='dashboard' element={<Dashboard />}></Route>
                </Route>
                <Route index path='/' element={<Login />}></Route>
                <Route path='/login' element={<Login />}></Route>
                
            </Routes>
        </BrowserRouter>
  )
}
