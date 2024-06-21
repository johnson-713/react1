/* eslint-disable react/prop-types */

export const Box = ({children}) => {
  return (
    <div className="box">
        <div className="box-in">
          {children}
        </div>
      </div>
  )
}
