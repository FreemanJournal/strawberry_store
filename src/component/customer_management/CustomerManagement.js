import React, { useState } from 'react'
import OrderInfo from './OrderInfo';
import * as BsIcons from "react-icons/bs"
import "./styles/styles.css";


export default function CustomerManagement() {
    const initialState = {
        productName: "",
        productWeight: "",
        productUnit: "",
        unitPrice: "",

    }

    const [productData, setProductData] = useState([initialState])

    const createNewOrder = () => {
        setProductData([
            ...productData,
            initialState
        ])

    }
    const deleteOrder = (index) => {
        const UpdateData = productData.filter((item, i) => i !== index)
        setProductData(UpdateData)
    }
    const onChangeHandler = ({ target: { name, value } }, index) => {
        const updateOrder = productData.map((product, i) => index === i ?
            { ...product, [name]: isNaN(value) ? value : Number(value) } : product
        )
        setProductData(updateOrder)
    }
    const submitHandler = () => {
        
    }

    return (
        <>
            <main className='customerOrder'>
                <section>
                    <div className="customer_field customer_name">
                        <h3>Customer Name</h3>
                        <span className='customer_input'>
                            <input type="text" name='customerName' placeholder="Md Ishaque" />
                            <BsIcons.BsFillPersonPlusFill className='customer_icon' />
                        </span>
                    </div>
                    {
                        productData.map((item, index) => <OrderInfo key={index} onChangeHandler={onChangeHandler} index={index} deleteOrder={deleteOrder} item={item} />)
                    }

                </section>
                <section className="addNewForm">
                    <button type='button' onClick={createNewOrder}>Add More</button>
                    <button type='button' onClick={submitHandler}>Submit</button>
                </section>


            </main>


        </>
    )
}
