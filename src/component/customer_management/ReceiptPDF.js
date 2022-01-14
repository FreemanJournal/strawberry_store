import { Document, Image, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import React from 'react';
import logo from "./images/logo.png";
export default function ReceiptPDF({ productData,customerName }) {

    const TotalPrice = productData.reduce((accumulator, currentValue) => accumulator += (currentValue.unitPrice * (currentValue.productWeight * currentValue.productUnit)), 0)
    

    const styles = StyleSheet.create({
        body: {
            paddingTop: 35,
            paddingBottom: 65,
            paddingHorizontal: 35,
        },
        header: {
            fontSize: 12,
            marginBottom: 20,
            textAlign: 'center',
            color: 'grey',
        },
        subHeader: {
            fontSize: 12,
            marginBottom: 20,
            color: '#000',
            display: 'flex',
            flexDirection: "row",
            justifyContent: "space-between"
        },
        tableHeader: {
            padding: '3mm',
            fontSize: 12,
            textAlign: 'center',
            color: '#000',
            display: 'flex',
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: "#F7F7F6",
            borderRadius: "1mm"
        },
        tableCell: {
            padding: '3mm',
            fontSize: 12,
            textAlign: 'center',
            color: '#000',
            display: 'flex',
            flexDirection: "row",
            justifyContent: "space-between",
        },
        tableTotalCell: {
            padding: '3mm',
            fontSize: 12,
            textAlign: 'center',
            color: '#000',
            display: 'flex',
            flexDirection: "row",
            borderTop: ".1mm",
            justifyContent: "flex-end",
        },
        tablePaidCell: {
            padding: '3mm',
            fontSize: 12,
            color: '#000',
            display: 'flex',
            flexDirection: "row",
            justifyContent: "flex-end",
        },
        headerImg: {

            display: "flex",
            justifyContent: "flex-start"
        },
        image: {
            marginVertical: 15,
            width: 40,
            height: 50,
        },
        quantity: {
            marginLeft: "1cm"
        },
        subTotal: {
            Width: "1in"
        },
        total: {
            paddingHorizontal: "1cm"
        },
        pageNumber: {
            position: 'absolute',
            fontSize: 12,
            bottom: 30,
            left: 0,
            right: 0,
            textAlign: 'center',
            color: 'grey',
        },
    });
    return (
        <>
            <Document>
                <Page style={styles.body} orientation="landscape">
                    <Text style={styles.header} fixed>
                        Customer Receipt
                    </Text>
                    <View style={styles.subHeader}>
                        <Text style={styles.headerImg}>
                            <Image
                                style={styles.image}
                                src={logo}
                                fixed={true}
                            />
                        </Text>
                        <Text
                            style={styles.subtitle}
                        >
                            Date : 12/01/2022</Text>
                    </View>
                    <View style={styles.subHeader}>
                        <Text style={styles.headerImg}>
                            Customer Name : {customerName}
                        </Text>
                        <Text
                            style={styles.subtitle}
                        >
                            Receipt Number : 12345</Text>
                    </View>
                    <View style={styles.tableHeader}>
                        <Text style={styles.headerImg}>
                            Bought Items :
                        </Text>
                        <Text>
                            Quantity
                        </Text>
                        <Text style={styles.subtitle}>
                             Unit Price
                        </Text>
                        <Text style={styles.subtitle}>
                            Sub total
                        </Text>
                    </View>




                    {
                        productData.map((item) => {
                            const { productName, productWeight, productUnit, unitPrice } = item
                           
                            return (
                                <>
                                    <View style={styles.tableCell}>
                                        <Text style={styles.headerImg}>
                                            {productName}
                                        </Text>
                                        <Text style={styles.quantity}>
                                            {productWeight}kg
                                        </Text>
                                        <Text style={styles.subtitle}>
                                            {`$${unitPrice}`}
                                        </Text>
                                        <Text style={styles.subtitle}>
                                            {`$${unitPrice * productWeight}`}
                                        </Text>
                                    </View>

                                </>
                            )
                        })
                    }
                    <View style={styles.tableTotalCell}>
                        <Text style={styles.total}>
                            Total
                        </Text>
                        <Text style={styles.subTotal}>
                            {`$${TotalPrice}`}</Text>
                    </View>
                    <View style={styles.tablePaidCell}>
                        <Text style={styles.total}>
                            Paid
                        </Text>
                        <Text style={styles.subTotal}>
                            {`$${TotalPrice}`}</Text>
                    </View>
                    <View style={styles.tableTotalCell}>
                        <Text style={styles.total}>
                            Payable
                        </Text>
                        <Text style={styles.subTotal}>
                            $0</Text>
                    </View>




                    <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
                        `${pageNumber} / ${totalPages}`
                    )} fixed />
                </Page>
            </Document>

        </>
    )
}
