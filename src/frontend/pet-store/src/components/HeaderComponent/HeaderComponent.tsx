import React from 'react'
import './style.css'
function HeaderComponent() {
  return (
    
    <div className='container-fluid d-flex w-100'>

        <div className="col-3 bg-primary column">
            <span>Hello</span>
        </div>

        <div className="col-6 bg-danger column">
        <span>Hello</span>
            
        </div>

        <div className="col-3 bg-success column">
        <span>Hello</span>
            
        </div>
    </div>
  )
}

export default HeaderComponent