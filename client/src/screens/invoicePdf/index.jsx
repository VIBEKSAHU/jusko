import React from "react";
// new code
import  { useEffect, useState } from 'react';
// import QRCode from 'qrcode.react';
// import QRCode  from "react-qr-svg";


// import htmlToImage from 'html-to-image';
import { toPng } from 'html-to-image';


// import qrImage from 'qr-image';
import Qrcode from "./Qrcode";
import { QRCodeCanvas,QRCodeSVG } from 'qrcode.react'
// import ReactToPrint from 'react-to-print';
// import { View, Text } from 'react-native';
// import QRCode from 'qrcode.react';
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
  Image,
} from "@react-pdf/renderer";
import axios from "axios";
// import { useState } from "react";

export default function Index() {
  const [value, setValue] = useState("");
  const fetchAreaBa = async (e) => {
    axios
      .post("/getApi", {
        url: `https://reqres.in/api/users?page=2`,
      })
      .then((res) => {
        setValue(res.data.total_pages);
        console.log("res.data::" + res.data.total_pages);
      });
  };

  fetchAreaBa();

  // Create styles
  const styles = StyleSheet.create({
    page: {
      // paddingTop:"40px",
      paddingHorizontal: "15px",
      backgroundColor: "white",
      color: "#2D2D2D",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      paddingBottom: "50px",
    },

    viewer: {
      width: window.innerWidth, //the pdf viewer will take up all of the width and height
      height: window.innerHeight,
    },
    pageNumbers: {
      position: "absolute",
      bottom: 10,
      right: 30,
      fontSize: 12,
      color: "black",
    },
    logo: {
      width: '150px',
      height:'75px',
    
    },
    text1: {
      fontSize: "12px",
      color: "#1D1D1D",
      width: "50%",
      textAlign: "right",
      marginRight: "40px",
    },
    text2: {
      fontSize: "12px",
      color: "#1D1D1D",
      width: "50%",
      textAlign: "left",
      marginLeft: "40px",
    },
    text3: {
      fontSize: "10.5px",
      color: "#1D1D1D",
    },
    text4: {
      fontSize: "10.5px",
      color: "#6D6D6D",
      // width:"200px"
    },
    box: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      marginTop: "20px",
    },
    box2: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      width: "100%",
      marginTop: "20px",
    },
    box3: {
      width: "30%",
    },
    box4: {
      border: "1px",
      padding: "5px",
      fontSize: "10.5px",
      color: "#1D1D1D",
      width: "55%",
    },
    table: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      width: "100%",
      marginTop: "20px",
    },
    col: {
      // flex:1
    },
    cell: {
      border: "1px solid black",
      padding: "5.5px",
    },
    th: {
      fontSize: "10.5px",
      color: "#1D1D1D",
    },
    th1: {
      height: "80px",
      fontSize: "10.5px",
      color: "#1D1D1D",
      textAlign: "left",
    },
   
    td: {
      fontSize: "10.5px",
      color: "#6D6D6D",
    },
    tr: {
      border: "1px solid black",
      padding: "5px",
      width: "100%",
    },
    qr:{
      display:"flex",
      justifyContent:"flex-end",

    }
  });



  
  
  // toPng(document.getElementById('my-qrcode'))
  //   .then(function (dataUrl) {
    //     // dataUrl contains the PNG image of the QR code
    //   })
    //   .catch(function (error) {
      //     console.error('Oops, something went wrong!', error);
      //   });
      
      
      // Create Document Component
      function InvoicePdf({ invoiceData }) {
        const data = invoiceData;
        console.log(invoiceData);
        // console.log(props.userData)
        const date = new Date();
        
      }
      // const qrCodeData = 'https://reactjs.org/';
      
      // const [qrCodeImage, setQrCodeImage] = useState(null);
    
      // useEffect(() => {
      //   // Convert QR code component to image and set state with the data URL
      //   const qrCodeElement = document.getElementById('qr-code');
      //    toPng(qrCodeElement).then((dataUrl) => {
      //     setQrCodeImage(dataUrl)})
    
      //     .catch(function (error) {
      //   console.error('Oops, something went wrong!', error);
            
      //   });
      // }, []);









 

  return (
    <>
    {/* <QRCodeSVG value="https://reactjs.org/" />  */}
   {/* <div>
      <div id="qr-code">
      <QRCode value="https://google.com/" size={256} />
    </div> */}
    <Qrcode/>
      <PDFViewer style={styles.viewer}>
       {/* <QRCode/> */}
      
        {/* Start of the document*/}
        <Document>
          {/*render a single page*/}
          
          <Page size={841.89} style={styles.page}>
        {/* <QRCodeCanvas bgColor='red' value="https://reactjs.org/" />
        <QRCodeSVG value="https://reactjs.org/" /> */}
            <View style={styles.box}>
              <Text style={styles.text1}>
                Tata Steel Utilities and Infrastructure Services Limited
              </Text>
              <Text style={styles.text2}>Original for recipient</Text>
            </View>
              
            <View style={styles.box}>
              <Text style={styles.text1}>TAX INVOICE</Text>
              <View style={styles.text2}>
                <Text>Invoice No. (GST) : 232324</Text>
                {/* <Image style={styles.qrCode} src={qrCodeData} /> */}
                {/* <QRCodeSVG value="https://reactjs.org/" /> */}
                {/* <MyDocument /> */}
                <Text>Invoice Date: 25-04-2023</Text>
                {/* <Image src={qrCodeImage} style={styles.qr}/> */}
                {/* <Image src={require("./Qrcode/index")}/> */}
                {/* <QRCode
                bgColor="#FFFFFF"
                fgColor="#000000"
                level="Q"
                style={{ width: 256 }}
                value="some text"
            /> */}
              </View>
            </View>
            {/* <ReactToPrint
          trigger={() => <Text>Print QR Code</Text>}
          content={() => this.componentRef}
        /> */}
        
            <View style={styles.box2}>
              <View style={styles.box3}>
                <Text style={styles.text3}>Name and Address of Supplier</Text>
                <Text wrap={true} style={styles.text4}>
                  Tata Steel Utilities and Infrastructure Services Limited
                  (Formerly Jamshedpur Utilities and Services Company Limited){" "}
                </Text>
                <Text wrap={true} style={styles.text3}>
                  Add: JUSCO Town office premises, Sakchi Boulevard Road,
                  Northern Town,
                </Text>
                <Text wrap={true} style={styles.text3}>
                  Pin: 831001 City: Jamshedpur 20
                </Text>
                <Text wrap={true} style={styles.text3}>
                  Billing Period Start Date: 01.03.2023
                </Text>
                <Text wrap={true} style={styles.text3}>
                  Billing Period End Date: 31.03.2023
                </Text>
              </View>

              <View style={styles.box3}>
                <Text style={styles.text3}>
                  Details of Recepient (Billed To) :
                </Text>
                <Text wrap={true} style={styles.text4}>
                  DBMS KADMA HIGH SCHOOL, ROAD NO:23, FARM AREA KADMA JAMSHEDPUR
                  831005
                </Text>
                <Text style={styles.text3}>Customer Code : 101715</Text>
                <Text style={styles.text3}>E-mail ID : </Text>
                <Text style={styles.text3}>Phone : </Text>
              </View>
                <Text> </Text>
                <Text> </Text>

              <View style={styles.box3}>
                <Text style={styles.text3}>
                  Details of Consignee (Shipped To) :
                </Text>
                <Text wrap={true} style={styles.text4}>
                  DBMS KADMA HIGH SCHOOL, ROAD NO:23, FARM AREA KADMA JAMSHEDPUR
                  831005
                </Text>
                <Text style={styles.text3}>Customer Code : 101715</Text>
              </View>
            </View>

            <View style={styles.box2}>
              <View style={styles.box3}>
                <Text style={styles.text4}>State : Jharkhand</Text>
                <Text style={styles.text4}>State Code : 20</Text>
                <Text style={styles.text4}>GSTIN : 20AABCJ3604P1ZR</Text>
                <Text style={styles.text3}>
                  Header Text : Garbage hauling job
                </Text>
              </View>

              <View style={styles.box3}>
                <Text style={styles.text4}>State : Jharkhand</Text>
                <Text style={styles.text4}>State Code : 20</Text>
                <Text style={styles.text4}>GSTIN : </Text>
                <Text style={styles.text4}>PAN No. : </Text>
                <Text style={styles.text4}>Customer PO No. : Nil</Text>
                <Text style={styles.text4}>Customer PO Dt. : </Text>
                <Text style={styles.text4}>Type of Supply : B2C</Text>
                <Text style={styles.text4}>GST TDS Applicable : N </Text>
              </View>

              <View style={styles.box3}>
                <Text style={styles.text4}>State : Jharkhand</Text>
                <Text style={styles.text4}>State Code : 20</Text>
                <Text style={styles.text4}>GSTIN : </Text>
                <Text style={styles.text3}>
                  Place of Supply Text : 20 Jharkhand
                </Text>
              </View>
            </View>

            <View style={styles.table}>
              <View style={styles.col}>
                <View style={styles.cell}>
                  <Text style={styles.th}>SL </Text>
                  <Text style={styles.th}>No.</Text>
                  <Text style={styles.th}> </Text>
                </View>
                <View style={styles.cell}>
                  <Text style={styles.td}>1</Text>
                  <Text style={styles.td}> </Text>
                </View>
                <View style={styles.cell}>
                  <Text style={styles.td}> </Text>
                </View>
              </View>

              <View style={styles.col}>
                <View style={styles.cell}>
                  <Text style={styles.th}>Item Code With</Text>
                  <Text style={styles.th}>Description of</Text>
                  <Text style={styles.th}>Goods/Services</Text>
                </View>
                <View style={styles.cell}>
                  <Text wrap={true} style={styles.td}>
                    MISC19153
                  </Text>
                  <Text style={styles.td}>Garbage Hauling</Text>
                </View>
                <View style={styles.cell}>
                  <Text style={styles.td}>Total:</Text>
                </View>
              </View>

              <View style={styles.col}>
                <View style={styles.cell}>
                  <Text style={styles.th}>HSN</Text>
                  <Text style={styles.th}>Code</Text>
                  <Text style={styles.th}> </Text>
                </View>
                <View style={styles.cell}>
                  <Text style={styles.td}>999424</Text>
                  <Text style={styles.td}> </Text>
                </View>
                <View style={styles.cell}>
                  <Text style={styles.td}> </Text>
                </View>
              </View>

              <View style={styles.col}>
                <View style={styles.cell}>
                  <Text style={styles.th}>QTY</Text>
                  <Text style={styles.th}> </Text>
                  <Text style={styles.th}> </Text>
                </View>
                <View style={styles.cell}>
                  <Text style={styles.td}>1.000</Text>
                  <Text style={styles.td}> </Text>
                </View>
                <View style={styles.cell}>
                  <Text style={styles.td}>1</Text>
                </View>
              </View>

              <View style={styles.col}>
                <View style={styles.cell}>
                  <Text style={styles.th}>UOM</Text>
                  <Text style={styles.th}> </Text>
                  <Text style={styles.th}> </Text>
                </View>
                <View style={styles.cell}>
                  <Text style={styles.td}>TRP</Text>
                  <Text style={styles.td}> </Text>
                </View>
                <View style={styles.cell}>
                  <Text style={styles.td}> </Text>
                </View>
              </View>

              <View style={styles.col}>
                <View style={styles.cell}>
                  <Text style={styles.th}>Rate Per</Text>
                  <Text style={styles.th}>Unit</Text>
                  <Text style={styles.th}>(INR)</Text>
                </View>
                <View style={styles.cell}>
                  <Text style={styles.td}>1,320.00</Text>
                  <Text style={styles.td}> </Text>
                </View>
                <View style={styles.cell}>
                  <Text style={styles.td}>0.00</Text>
                </View>
              </View>

              <View style={styles.col}>
                <View style={styles.cell}>
                  <Text style={styles.th}>Discount</Text>
                  <Text style={styles.th}>(INR)</Text>
                  <Text style={styles.th}> </Text>
                </View>
                <View style={styles.cell}>
                  <Text style={styles.td}>0.00</Text>
                  <Text style={styles.td}> </Text>
                </View>
                <View style={styles.cell}>
                  <Text style={styles.td}>0.00</Text>
                </View>
              </View>

              <View style={styles.col}>
                <View style={styles.cell}>
                  <Text style={styles.th}>Value</Text>
                  <Text style={styles.th}>(INR)</Text>
                  <Text style={styles.th}> </Text>
                </View>
                <View style={styles.cell}>
                  <Text style={styles.td}>1,320.00</Text>
                  <Text style={styles.td}> </Text>
                </View>
                <View style={styles.cell}>
                  <Text style={styles.td}>0.00</Text>
                </View>
              </View>

              <View style={styles.col}>
                <View style={styles.cell}>
                  <Text style={styles.th}>Taxable</Text>
                  <Text style={styles.th}>Val (INR)</Text>
                  <Text style={styles.th}> </Text>
                </View>
                <View style={styles.cell}>
                  <Text style={styles.td}>1,320.00</Text>
                  <Text style={styles.td}> </Text>
                </View>
                <View style={styles.cell}>
                  <Text style={styles.td}>0.00</Text>
                </View>
              </View>

              <View style={styles.col}>
                <View style={styles.cell}>
                  <Text style={styles.th}>CGST</Text>
                  <Text style={styles.th}>Rate</Text>
                  <Text style={styles.th}>(%)</Text>
                </View>
                <View style={styles.cell}>
                  <Text style={styles.td}>9.00</Text>
                  <Text style={styles.td}> </Text>
                </View>
                <View style={styles.cell}>
                  <Text style={styles.td}> </Text>
                </View>
              </View>

              <View style={styles.col}>
                <View style={styles.cell}>
                  <Text style={styles.th}>CGST</Text>
                  <Text style={styles.th}>Amt (INR)</Text>
                  <Text style={styles.th}> </Text>
                </View>
                <View style={styles.cell}>
                  <Text style={styles.td}>118.80</Text>
                  <Text style={styles.td}> </Text>
                </View>
                <View style={styles.cell}>
                  <Text style={styles.td}>118.80</Text>
                </View>
              </View>

              <View style={styles.col}>
                <View style={styles.cell}>
                  <Text style={styles.th}>SGST</Text>
                  <Text style={styles.th}>Rate</Text>
                  <Text style={styles.th}>(%)</Text>
                </View>
                <View style={styles.cell}>
                  <Text style={styles.td}>9.00</Text>
                  <Text style={styles.td}> </Text>
                </View>
                <View style={styles.cell}>
                  <Text style={styles.td}> </Text>
                </View>
              </View>

              <View style={styles.col}>
                <View style={styles.cell}>
                  <Text style={styles.th}>SGST</Text>
                  <Text style={styles.th}>Amt (INR)</Text>
                  <Text style={styles.th}> </Text>
                </View>
                <View style={styles.cell}>
                  <Text style={styles.td}>118.80</Text>
                  <Text style={styles.td}> </Text>
                </View>
                <View style={styles.cell}>
                  <Text style={styles.td}>118.80</Text>
                </View>
              </View>

              <View style={styles.col}>
                <View style={styles.cell}>
                  <Text style={styles.th}>IGST</Text>
                  <Text style={styles.th}>Rate</Text>
                  <Text style={styles.th}>(%)</Text>
                </View>
                <View style={styles.cell}>
                  <Text style={styles.td}>0.00</Text>
                  <Text style={styles.td}> </Text>
                </View>
                <View style={styles.cell}>
                  <Text style={styles.td}> </Text>
                </View>
              </View>

              <View style={styles.col}>
                <View style={styles.cell}>
                  <Text style={styles.th}>IGST</Text>
                  <Text style={styles.th}>Amt (INR)</Text>
                  <Text style={styles.th}> </Text>
                </View>
                <View style={styles.cell}>
                  <Text style={styles.td}>0.00</Text>
                  <Text style={styles.td}> </Text>
                </View>
                <View style={styles.cell}>
                  <Text style={styles.td}>0.00</Text>
                </View>
              </View>

              <View style={styles.col}>
                <View style={styles.cell}>
                  <Text style={styles.th}>Total Value</Text>
                  <Text style={styles.th}>(INR)</Text>
                  <Text style={styles.th}> </Text>
                </View>
                <View style={styles.cell}>
                  <Text style={styles.td}>1,557.60</Text>
                  <Text style={styles.td}> </Text>
                </View>
                <View style={styles.cell}>
                  <Text style={styles.td}>1,557.60</Text>
                </View>
              </View>
            </View>

            <View style={styles.tr}>
              <Text style={styles.th}>Total Invoice Value ( in figures )</Text>
            </View>
            <View style={styles.tr}>
              <Text style={styles.td}>
                Total Invoice Value ( in Words ) : ONE THOUSAND FIVE HUNDRED
                FIFTY SEVEN Rupees SIXTY Paise
              </Text>
            </View>
            <View style={styles.tr}>
              <Text style={styles.td}>
                Whether Tax subject to reverse charge : NO
              </Text>
            </View>

            {/*          
          <View style={styles.box}>
            <Text style={styles.text1}>
              Tata Steel Utilities and Infrastructure Services Limited
            </Text>
            <Text style={styles.text2}>Original for recipient</Text>
          </View>

          <View style={styles.box}>
            <Text style={styles.text1}>TAX INVOICE</Text>
            <View style={styles.text2}>
              <Text>Invoice No. (GST) : {data.invoice_no}</Text>
               
              <Text>
                Invoice Date: {date.getDay()}/{date.getMonth()}/
                {date.getFullYear}
              </Text>
              
            </View>
           
          </View> */}
            <Text
              style={styles.pageNumbers}
              render={({ pageNumber, totalPages }) =>
                `page :  ${pageNumber}   of   ${totalPages}`
              }
              fixed
            />
          </Page>

          {/* <Text style={styles.pageNumbers} render={({ pageNumber, totalPages }) => (
                        `${pageNumber} / ${totalPages}`
                    )} fixed /> */}

          <Page size={841.89} style={styles.page} >
            <View style={styles.box}>
              <Text style={styles.text1}>
                Tata Steel Utilities and Infrastructure Services Limited
              </Text>
              <Text style={styles.text2}>Original for recipient</Text>
            </View>

            <View style={styles.box}>
              <Text style={styles.text1}>TAX INVOICE</Text>
              <View style={styles.text2}>
                <Text>Invoice No. (GST) : 232324</Text>

                <Text>Invoice Date: 25-04-2023</Text>

                {/* <Image
                  src="https://www.shutterstock.com/image-vector/handwritten-signature-signed-papers-documents-260nw-2248268539.jpg"
                  cache={false}
                /> */}
              </View>
            </View>
            <View style={styles.table}>
              <View style={styles.col}>
                <View style={styles.cell}>
                  <Text style={styles.td}>
                    Internal Ref No :-0090056252 
                    </Text>
                    <Text style={styles.td}>
                    All payments should be made by
                    cheque/draft in favour of "Tata Steel Utilities and
                    </Text>
                    <Text style={styles.td}>
                    Infrastructure Services Limited" payable at Jamshedpur.
                    Payment as per the
                    </Text>
                    <Text style={styles.td}>
                     terms of order or within 7 working days
                    from the date of bill. If the bill is not paid
                    </Text>
                    <Text style={styles.td}>
                    within due date, interest will be charged @ 18% per annum.
                  </Text>
                    <Text style={styles.td}> </Text>
                    <Text style={styles.td}> </Text>
                    <Text style={styles.td}> </Text>
                    <Text style={styles.td}> </Text>
                    <Text style={styles.td}> </Text>
                </View>
              </View>
              <View style={styles.col}>
                <View style={styles.cell}>
                  <Text style={styles.td}>
                    For Tata Steel Utilities and Infrastructure Services Limited
                    </Text>
                    <Text style={styles.td}>
                    (Formerly Jamshedpur Utilities and Services Company
                    Limited).
                    </Text>
                <Image style={styles.logo}
                  src={require("../../assets/image/HODsignature.png")}
                  cache={false}
                />
                <Text style={styles.td}> </Text>
                 <Text style={styles.td}>
                 (Authorised Signatory)
                  </Text>

                </View>
              </View>
            </View>
            <Text> </Text>
            <Text> </Text>
            <Text> </Text>
            <Text> </Text>
            <Text> </Text>
            <Text> </Text>
            <Text> </Text>
            <Text> </Text>
            <Text> </Text>
            <Text> </Text>
            <Text
              style={styles.pageNumbers}
              render={({ pageNumber, totalPages }) =>
                `page :  ${pageNumber}   of   ${totalPages}`
              }
              fixed
            />

          </Page>
        </Document>
      </PDFViewer>
      
      {/* ReactDOM.render(<InvoicePdf />, document.getElementById('mountNode')); */}
    </>
  );

}
