import React from 'react'
import Rules from './components/Rules'
import EmployeeAccess from './components/EmployeeAccess'

const App = () => {
  return (
    <div className="w-full min-h-screen bg-slate-900 text-white flex flex-col items-center justify-start py-4 px-2 md:py-8 md:px-4 lg:justify-center">
      <Rules />
      <EmployeeAccess />
    </div>
  )
}

export default App