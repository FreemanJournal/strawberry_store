import React, { useState } from 'react'
import OrderInfo from './OrderInfo';
import * as BsIcons from "react-icons/bs"
import "./styles/styles.css";
import { PDFViewer } from '@react-pdf/renderer';
import ReceiptPDF from './ReceiptPDF';


export default function CustomerManagement() {
    const initialState = {
        customerName:"",
        productName: "",
        productWeight: "",
        productUnit: "",
        unitPrice: "",

    }

    const [productData, setProductData] = useState([initialState])
    const [viewPdf, setViewPdf] = useState(false)
    const [viewForm, setViewForm] = useState(true)
    
    const createNewOrder = () => {
        setViewForm(true)
        setProductData([
            ...productData,
            initialState
        ])
        setViewPdf(false)
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
        setViewPdf(prev => !prev)
        setViewForm(false)

    }



    return (
        <>
            <main className='customerOrder'>
                <section>
                    {
                        viewForm && (

                            <>
                                <div className="customer_field customer_name">
                                    <h3>Customer Name</h3>
                                    <span className='customer_input'>
                                        <input type="text" name='customerName' placeholder="Md Ishaque" onChange={onChangeHandler} />
                                        <BsIcons.BsFillPersonPlusFill className='customer_icon' />
                                    </span>
                                </div>
                                {
                                    productData.map((item, index) => <OrderInfo key={index} onChangeHandler={onChangeHandler} index={index} deleteOrder={deleteOrder} item={item} />)
                                }
                            </>
                        )
                    }


                </section>
                <section className="addNewForm">
                    <button type='button' onClick={createNewOrder}>Add More</button>
                    <button type='button' onClick={submitHandler}>Submit</button>
                </section>

                <section>
                    {viewPdf && <PDFViewer style={{ width: "100%", height: "90vh" }}>
                        <ReceiptPDF productData={productData} customerName="Md Imran" />
                    </PDFViewer>}
                </section>
            </main>


        </>
    )
}
