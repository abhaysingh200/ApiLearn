import React from 'react'
import Nav from './Nav'
import { Outlet } from 'react-router-dom' 

const RouterLayout = () => {
  return (
    <>
      <Nav/>
      <Outlet/>
    </>
  )
}

export default RouterLayout
