import React from 'react'
import "./input.css"

export default function Input() {
    return (
        <>
            <div className="inputField">
                <input className='inputBox' type="text" name='name' required autoComplete='off' />
                <label htmlFor="name" className='label-input'>
                    <span className='content-input'>Name</span>
                </label>
            </div>
           

        </>
    )
}
