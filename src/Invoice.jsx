import { useContext } from 'react'
import { dashboardContext } from './Dashboard'

export const Invoice = () => {
    const {formData} = useContext(dashboardContext)
  return (
    <div>Invoice for this mobile number {formData.mobile}</div>
  )
}
