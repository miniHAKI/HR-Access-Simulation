import React from 'react'
import Rules from './components/Rules'
import EmployeeAccess from './components/EmployeeAccess'

const App = () => {
  return (
    <div className="w-full h-screen bg-slate-900 text-white flex flex-col items-center justify-center">
      <Rules />
      <EmployeeAccess />
    </div>
  )
}

export default App
