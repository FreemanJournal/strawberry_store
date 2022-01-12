import React from 'react'

import * as FaIcons from "react-icons/fa"
import * as MdIcons from "react-icons/md"

export default function OrderInfo({ onChangeHandler, index, deleteOrder, item }) {

    const { productName, productWeight, productUnit, unitPrice } = item
    
    return (
        <section className='customer'>
            <form className='customer_form'>

                <div className="customer_field">
                    <h3>Product Name</h3>
                    <select
                        className="customer_input"
                        value={productName}
                        name='productName'
                        onChange={(e) => onChangeHandler(e, index)}
                    >
                        <option value="" disabled hidden>
                            Product
                        </option>
                        <option value="Rice">Rice</option>
                        <option value="Sugar">Sugar</option>
                        <option value="Salt">Salt</option>
                        <option value="Onion">Onion</option>
                    </select>
                </div>
                <div className="customer_field">
                    <h3>Product Weight</h3>
                    <span className='customer_input'>
                        <input type="number" value={productWeight} name='productWeight' onChange={(e) => onChangeHandler(e, index)} />
                        <FaIcons.FaBalanceScaleLeft className='customer_icon' />
                    </span>
                </div>
                <div className="customer_field">
                    <h3>Product Unit</h3>
                    <select
                        className="customer_input"
                        // defaultValue={'DEFAULT'}
                        name='productUnit'
                        value={productUnit}
                        onChange={(e) => onChangeHandler(e, index)}
                    >
                        <option value="" disabled hidden>
                            Unit
                        </option>
                        <option value=".001">Gram</option>
                        <option value="1" >Kg</option>
                        <option value="5">Packet(5kg)</option>
                        <option value="25">Bag(25kg)</option>
                        <option value="40">Sack(40kg)</option>
                        <option value="100">Ton(100kg)</option>
                    </select>
                </div>
                <div className="customer_field">
                    <h3>Unit Price</h3>
                    <span className='customer_input'>
                        <input type="number" value={unitPrice} name='unitPrice' onChange={(e) => onChangeHandler(e, index)} />
                        <MdIcons.MdAttachMoney className='customer_icon' />
                    </span>
                </div>
                <div className="customer_field">
                    
                    <span className='customer_input'>
                        <MdIcons.MdDelete className='delete_icon' size="4ch" onClick={() => deleteOrder(index)} />
                    </span>
                </div>

            </form>

        </section>
    )
}
