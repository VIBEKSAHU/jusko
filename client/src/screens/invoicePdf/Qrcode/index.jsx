import React from 'react'
import  QRCode from 'qrcode.react'
import  { useEffect, useState } from 'react';
// import QRCode from "qrcode.react"
import { toPng } from 'html-to-image';

export default function Qrcode() {


  const data = '8d429017aeb75dfab2c6571fb32ef855907d45ae08619843c9af463a443166d4';
 
  const [qrCodeImage, setQrCodeImage] = useState(null);
    
  useEffect(() => {
    // Convert QR code component to image and set state with the data URL
    const qrCodeElement = document.getElementById('qr-code');
     toPng(qrCodeElement).then((dataUrl) => {
      setQrCodeImage(dataUrl)})

      .catch(function (error) {
    console.error('Oops, something went wrong!', error);
        
    });
  }, []);


  return (
    <>

      {/* <QRCode value={data}/> */}
      {/* <QRCodeCanvas value={data} /> */}
      {/* ReactDOM.render( */}
      {/* <QRCodeCanvas bgColor='red' value={data} /> */}
      {/* document.getElementById('mountNode')
            ); */}
      <div id="qr-code">
        <QRCode value={data} size={256} />
      </div>
     <div>
      <image src={qrCodeImage} />

     </div>

    </>
  )
}
