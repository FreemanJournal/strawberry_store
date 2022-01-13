import React from 'react'
import { Document, Image, Page, Text, View } from "@react-pdf/renderer"

export default function ViewPdf({ poem }) {
    return (
        <>
            <Document>
                <Page size="A4">
                    <View style={{
                        padding: '50px',
                        fontWeight: 'bold',
                        color: '#2f4858',
                        textAlign: 'justify',
                        
                    }}>
                        <Text>{poem?.title}</Text>
                        <Text>{poem?.poet.name}</Text>
                        <Image src="https://picsum.photos/600/300" alt="" style={{ margin: "10px 0" }} />
                        <Text style={{ textAlign: 'justify', fontSize: "10px" }}>{poem?.content}</Text>
                    </View>

                </Page>

            </Document>
        </>
    )
}
