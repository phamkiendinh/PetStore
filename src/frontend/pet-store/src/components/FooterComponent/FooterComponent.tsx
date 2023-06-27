import React from 'react'

function FooterComponent() {
  return (
    
    <div className='container-fluid d-flex w-100'>

        <div className="col-3 col-s-3 bg-primary column">
            <span>Hello</span>
        </div>

        <div className="col-6 col-s-3 bg-danger column">
        <span>Hello</span>
            
        </div>

        <div className="col-3 col-s-3 bg-success column">
        <span>Hello</span>
            
        </div>
    </div>
  )
}

export default FooterComponent;