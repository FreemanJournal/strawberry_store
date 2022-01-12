import React from 'react'
import ViewPdf from './ViewPdf'

export default function Layout({ viewWeb, viewPdf, setViewWeb, setViewPdf, PDFDownloadLink,poem }) {

    return (
        <>
            <nav>
                <button onClick={() => {
                    setViewWeb(prev => !prev)
                    setViewPdf(false)
                }}>{viewWeb ? "Hide Web" : "View Web"}</button>
                <button onClick={() => {
                    setViewPdf(prev => !prev)
                    setViewWeb(false)
                }}>{viewPdf ? "Hide PDF" : "View Pdf"}</button>
                <PDFDownloadLink document={<ViewPdf poem={poem} />} filename="poem.pdf">
                    <button>Download</button>
                </PDFDownloadLink>

            </nav>

        </>
    )
}
