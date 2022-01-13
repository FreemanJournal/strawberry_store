import React from 'react'


export default function ReceiptWeb() {
    return (
        <>
            <div className="invoice-box" style={{
                maxWidth: '800px',
                margin: 'auto',
                padding: '30px',
                border: '1px solid #eee',
                boxShadow: '0 0 10px rgba(0, 0, 0, .15)',
                fontSize: '16px',
                lineHeight: '24px',
                fontFamily: 'Helvetica Neue',
                color: ' #555'
            }}>
                <table cellpadding="0" cellspacing="0" style={{
                    width: "100%",
                    lineHeight: 'inherit',
                    textAlign: 'left'
                }}>
                    <tr className="top">
                        <td colspan="2" style={{
                            padding: '5px',
                            verticalAlign: 'top'
                        }}>
                            <table style={{
                                width: "100%",
                                lineHeight: 'inherit',
                                textAlign: 'left'
                            }}>
                                <tr>
                                    <td className="title" style={{
                                        padding: '5px',
                                        verticalAlign: 'top',
                                        paddingBottom: '20px',
                                        fontSize: '45px',
                                        lineHeight: '45px',
                                        color: '#333'
                                    }}>
                                        <img src="https://bit.ly/3JTnDp0" alt="Company Logo"
                                            style={{ width: '100%', maxWidth: '156px' }} />
                                    </td>
                                    <td style={{
                                        padding: '5px',
                                        verticalAlign: 'top',
                                        textAlign: 'right',
                                        paddingBottom: '20px'
                                    }}>
                                        Date: 12/2/12
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr className="information">
                        <td colspan="2">
                            <table style={{
                                width: "100%",
                                lineHeight: 'inherit',
                                textAlign: 'left'
                            }}>
                                <tr>
                                    <td style={{
                                        padding: '5px',
                                        verticalAlign: 'top',
                                        paddingBottom: '40px'
                                    }}>
                                        Customer name: MD Ishaq
                                    </td>
                                    <td style={{
                                        padding: '5px',
                                        verticalAlign: 'top',
                                        paddingBottom: '40px'
                                    }}>
                                        Receipt number: 36437
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr className="heading">
                        <td style={{
                            padding: '5px',
                            verticalAlign: 'top',
                            background:' #eee',
                            borderBottom: '1px solid #ddd',
                            fontWeight: 'bold'
                        }}>Bought items:</td>
                        <td style={{
                            padding: '5px',
                            verticalAlign: 'top',
                            background:' #eee',
                            borderBottom: '1px solid #ddd',
                            fontWeight: 'bold'
                        }}>Price</td>
                    </tr>
                    <tr className="item">
                        <td style={{
                            padding: '5px',
                            verticalAlign: 'top',
                            borderBottom: '1px solid #eee'
                        }}>First item:</td>
                        <td style={{
                            padding: '5px',
                            verticalAlign: 'top',
                            borderBottom: '1px solid #eee'
                        }}>$6553</td>
                    </tr>
                    <tr className="item">
                        <td style={{
                            padding: '5px',
                            verticalAlign: 'top',
                            borderBottom: '1px solid #eee'
                        }}>Second item:</td>
                        <td style={{
                            padding: '5px',
                            verticalAlign: 'top',
                            borderBottom: '1px solid #eee'
                        }}>$4546</td>
                    </tr>
                </table>
                <br />
                <h1 className="justify-center" style={{
                     
                }}>Total price: $456546</h1>
            </div>

        </>
    )
}
