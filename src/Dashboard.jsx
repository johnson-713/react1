import { createContext, useState } from 'react'
import { Profile } from './Profile'
import { Invoice } from './Invoice'

export const dashboardContext = createContext(null) 

export const Dashboard = () => {
    const [formData, setFormData] = useState({})

    const dashboardValue = {
        formData,
        setFormData,
    }
  return (
    <dashboardContext.Provider value={dashboardValue}>
        <Profile />
        <Invoice />
    </dashboardContext.Provider>
  )
}
