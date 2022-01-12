import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Layout from './Layout';
import "./styles/styles.css";
import ViewPdf from './ViewPdf';
import ViewWeb from './ViewWeb';
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer"
export default function PdfGeneratorV2() {
  const [poem, setPoem] = useState(null)
  const [viewWeb, setViewWeb] = useState(false)
  const [viewPdf, setViewPdf] = useState(false)

  function fetchPoem() {
    axios({
      method: 'get',
      url: 'https://www.poemist.com/api/v1/randompoems',

    })
      .then((res) => {
        console.log(res.data[0]);
        return setPoem(res.data[0])
      })

  }

  useEffect(() => fetchPoem(), [])



  return (
    <>
      <section className='rainSection'>
        <Layout viewWeb={viewWeb} viewPdf={viewPdf} setViewWeb={setViewWeb} setViewPdf={setViewPdf} PDFDownloadLink={PDFDownloadLink} poem={poem} />
        {
          poem ? (
            <>
              {viewWeb && <ViewWeb poem={poem} />}
              {viewPdf && <PDFViewer style={{ width: "100vw", height: "90vh" }}>
                <ViewPdf poem={poem} />
              </PDFViewer>}

            </>
          ) : null
        }
      </section>
    </>
  )
}
