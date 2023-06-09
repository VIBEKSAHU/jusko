import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { styles } from "./styles";
import Iframe from "react-iframe";
import axios from "axios";
import Paper from "@mui/material/Paper";
import Stack from '@mui/material/Stack';
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Checkbox, FormLabel } from "@mui/material";
import UsrSign from "../signaturePad";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DocumentView from "../../../document";
export default function AccountsApplicationDetails({ applicantData }) {


  let navigate = useNavigate()

  const mediaQuery = window.matchMedia("(max-width: 650px)");

  const [freq, setFreq] = useState("");
  const [category, setCategory] = useState("")
  const [mobileAck, setMobileAck] = useState(false)
  const [area, setArea] = useState("")
  const [material_code, setMaterialCode] = useState("")


  const [creds, setCreds] = useState({
    Longitude: "1",
    Latitude: "",
    area: "",
    rate: "",
    remarks_accounts: "",
    material_code: "",
    doc_1: null,
    doc_2: null,
    doc_3: null
  });


  const handleChange = (key) => {
    key.preventDefault();
    setCreds({ ...creds, [key.target.id]: key.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    axios.post("/updateCustomerData",
      {
        applicantId: applicantData.customer_id,
        updatedData: {
          material_code: material_code,
          remarks_accounts: creds.remarks_accounts,
          document_no_1: creds.doc_1 || applicantData?.document_no_1,
          document_no_2: creds.doc_2 || applicantData?.document_no_2,
          document_no_3: creds.doc_3 || applicantData?.document_no_3,
        }, token: localStorage.getItem("adminToken")
      }
    ).then((res) => {
      alert(res.data.message)
      const t = res.data.flag ? navigate("/AccountManagerDashboard") : "continue";
    })

    // user_name: user_name,
    // login_id: user_name,
    // password: Pass,
    // user_role: user_role,
    // active: active || "YES",
    // entry_by: entry_by,
    // entry_date: dateTime,
    // mod_by: mod_by,
    // mod_date: dateTime,
    // token: Token,
    // user_name, password, user_role, active, entry_by, mod_by
    axios
      .post("/createUser", {
        user_name: applicantData.application_no,
        password: applicantData.application_no,
        user_role: 5,
        active: "YES",
        entry_by: 4,
        mod_by: 4,
      })
      .then((res) => {
        changeStatusHandler(6)
        sendSms(`Your customer id for TSUISL Bulk Gen., has been created, your user id : ${applicantData.application_no} and password : ${applicantData.application_no}`)
      });
  };

  // const rejectHandler = async (e) => {
  //   axios
  //     .post("/changeStatus", {
  //       applicantId: applicantData.id,
  //       token: localStorage.getItem("adminToken"),
  //       newStatus: "rejected"
  //     })
  //     .then((res) => rejectSendSms());
  // };

  const changeStatusHandler = async (status) => {
    axios
      .post("/changeStatus", {
        applicantId: applicantData.customer_id,
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QiLCJpYXQiOjE2NjU5ODc1Njl9.ZCahkiAVSko1SoywOXXV39hBrPc7KXKhj0z6xvwnHdU",
        newStatus: status
      })
      .then((res) => { });
  };

  const sendSms = async (message) => {
    // axios
    //   .post("/sms", {
    //     phone: applicantData.mobile_no,
    //     message: message
    //   })
    //   .then((res) => {
    //     alert("customer created");
    //   });
    // alert(message);
  };
  const rejectSendSms = async () => {
    axios
      .post("/sms", {
        phone: applicantData.mobile_no,
        message: `Your appl. no.: ${applicantData.application_no} for TSUISL Bulk Gen. has been rejected. Please track your appl. for details.`
      })
      .then((res) => {
        alert("customer rejected");
      });

  };

  const divForScroll = useRef(null);
  const docType = (n) => {
    if (n === 1) return "GSTIN";
    else if (n === 2) return "Vendor ID Card";
    else if (n === 3) return "Trade License";
    else if (n === 4) return "Electricity Bill";
    else if (n === 5) return "Aadhaar";
    else if (n === 6) return "PAN";
    else if (n === 7) return "Other";
    else return "";
  };
  const [docImg, setdocImg] = useState("")



  return (
    <>
      <DocumentView docImg={docImg} setdocImg={setdocImg} />

      <div ref={divForScroll}></div>
      <Container maxWidth="xl" sx={styles.container}>
        <IconButton color="primary" aria-label="upload picture" component="label" onClick={() => { navigate(-1) }} sx={{ position: "absolute", top: "10px", left: "20px" }}>
          <ArrowBackIcon />
        </IconButton>
        <img
          style={mediaQuery.matches ? styles.imgLogoMobile : styles.imgLogo}
          src={require("../../../../assets/image/logo.png")}
          alt=""
          srcset=""
        />
        <Typography sx={styles.head}>Bulk Generation System</Typography>
        <Typography sx={styles.dashboardText}>Application Details</Typography>

        <Paper variant="outlined" sx={styles.fieldContainer}>
          <Box sx={styles.row}>
            <div>
              <Typography sx={styles.dashboardText}>Personal Info</Typography>
              <Box sx={styles.detailsRow}>
                <Typography sx={styles.field}>Name</Typography>
                <Typography sx={styles.fieldData}>
                  {applicantData.salutation +
                    ". " +
                    applicantData.first_name +
                    " " +
                    applicantData.last_name}
                </Typography>
              </Box>

              <Box sx={styles.detailsRow}>
                <Typography sx={styles.field}>Mobile Number</Typography>
                <Typography sx={styles.fieldData}>
                  {applicantData.mobile_no}
                </Typography>
              </Box>

              <Box sx={styles.detailsRow}>
                <Typography sx={styles.field}>Email</Typography>
                <Typography sx={styles.fieldData}>
                  {applicantData.email_id}
                </Typography>
              </Box>

              <Box sx={styles.detailsRow}>
                <Typography sx={styles.field}>Designation</Typography>
                <Typography sx={styles.fieldData}>
                  {applicantData.designation}
                </Typography>
              </Box>
            </div>
            <div>
              <Typography sx={styles.dashboardText}>
                Document Details
              </Typography>
              <Box sx={styles.detailsRow}>
                <Typography sx={styles.field}>
                  {" "}
                  {docType(applicantData?.document_type_1)}

                </Typography>
                <TextField
                  id="doc_1"
                  value={creds.doc_1}
                  label={docType(applicantData?.document_type_1)}
                  defaultValue={applicantData?.document_no_1}
                  onChange={handleChange}
                  variant="filled"
                />
                <Typography sx={styles.field}></Typography>
              </Box>

              <Box sx={styles.detailsRow}>
                <Typography sx={styles.field}>
                  {" "}
                  {docType(applicantData?.document_type_2)}
                </Typography>
                <TextField
                  id="doc_2"
                  value={creds.doc_2}
                  label={docType(applicantData?.document_type_2)}
                  defaultValue={applicantData?.document_no_2}
                  onChange={handleChange}
                  variant="filled"
                />
              </Box>

              <Box sx={styles.detailsRow}>
                <Typography sx={styles.field}>
                  {" "}
                  {docType(applicantData?.document_type_3)}
                </Typography>
                <TextField
                  id="doc_3"
                  value={creds.doc_3}
                  label={docType(applicantData?.document_type_3)}
                  defaultValue={applicantData?.document_no_3}
                  onChange={handleChange}
                  variant="filled"
                />
              </Box>
              <Box sx={styles.detailsRow}>
                {/* <Typography sx={styles.field}>
                 <a href={`http://localhost:3001${applicantData.document_file_name_1}`} target="_blank" >View Document</a>
                </Typography> */}

              </Box>

              <Typography sx={styles.dashboardText}>
                Document Details
              </Typography>
              <Box sx={styles.detailsRow}>
                <Typography sx={styles.field}>
                  {" "}
                  {docType(applicantData?.document_type_1)}
                </Typography>

                <Typography onClick={() => { setdocImg(`${applicantData?.document_file_name_1}`) }} sx={styles.fieldData}>
                  {applicantData?.document_no_1}
                </Typography>
              </Box>
              <Box sx={styles.detailsRow}>
                <Typography sx={styles.field}>
                  {" "}
                  {docType(applicantData?.document_type_2)}
                </Typography>
                <Typography onClick={() => { setdocImg(`${applicantData?.document_file_name_2}`) }} sx={styles.fieldData}>
                  {applicantData?.document_no_2}
                </Typography>
              </Box>
              <Box sx={styles.detailsRow}>
                <Typography sx={styles.field}>
                  {" "}
                  {docType(applicantData?.document_type_3)}
                </Typography>
                <Typography onClick={() => { setdocImg(`${applicantData?.document_file_name_3}`) }} sx={styles.fieldData}>
                  {applicantData?.document_no_3}
                </Typography>
              </Box>
            </div>
          </Box>
        </Paper>

        <Paper variant="outlined" sx={styles.fieldContainer}>
          <Box sx={styles.row}>
            <div>
              <Typography sx={styles.dashboardText}>Billing Address</Typography>
              <Box sx={styles.detailsRow}>
                <Typography sx={styles.field}>Name</Typography>
                <Typography sx={styles.fieldData}>
                  {applicantData.billing_estb_name}
                </Typography>
              </Box>

              <Box sx={styles.detailsRow}>
                <Typography sx={styles.field}>Street/ House No.</Typography>
                <Typography sx={styles.fieldData}>
                  {applicantData.billing_street}
                </Typography>
              </Box>

              <Box sx={styles.detailsRow}>
                <Typography sx={styles.field}>City</Typography>
                <Typography sx={styles.fieldData}>
                  {applicantData.billing_city}
                </Typography>
              </Box>

              <Box sx={styles.detailsRow}>
                <Typography sx={styles.field}>Region</Typography>
                <Typography sx={styles.fieldData}>
                  {applicantData.billing_region}
                </Typography>
              </Box>

              <Box sx={styles.detailsRow}>
                <Typography sx={styles.field}>Country</Typography>
                <Typography sx={styles.fieldData}>
                  {applicantData.billing_country}
                </Typography>
              </Box>
              <Box sx={styles.detailsRow}>
                <Typography sx={styles.field}>Postal Code</Typography>
                <Typography sx={styles.fieldData}>
                  {applicantData.billing_postal_code}
                </Typography>
              </Box>
            </div>

            <div>
              <Typography sx={styles.dashboardText}>Pickup Address</Typography>
              <Box sx={styles.detailsRow}>
                <Typography sx={styles.field}>Name</Typography>
                <Typography sx={styles.fieldData}>
                  {applicantData.pickup_estb_name}
                </Typography>
              </Box>

              <Box sx={styles.detailsRow}>
                <Typography sx={styles.field}>Street/ House No.</Typography>
                <Typography sx={styles.fieldData}>
                  {applicantData.pickup_street}
                </Typography>
              </Box>

              <Box sx={styles.detailsRow}>
                <Typography sx={styles.field}>City</Typography>
                <Typography sx={styles.fieldData}>
                  {applicantData.pickup_city}
                </Typography>
              </Box>

              <Box sx={styles.detailsRow}>
                <Typography sx={styles.field}>Region</Typography>
                <Typography sx={styles.fieldData}>
                  {applicantData.pickup_region}
                </Typography>
              </Box>

              <Box sx={styles.detailsRow}>
                <Typography sx={styles.field}>Country</Typography>
                <Typography sx={styles.fieldData}>
                  {applicantData.pickup_country}
                </Typography>
              </Box>
              <Box sx={styles.detailsRow}>
                <Typography sx={styles.field}>Postal Code</Typography>
                <Typography sx={styles.fieldData}>
                  {applicantData.pickup_postal_code}
                </Typography>
              </Box>
            </div>
          </Box>
        </Paper>
        {/* <Box sx={styles.row}>
          <div>
          <Typography sx={styles.dashboardText}></Typography>
        <Box sx={styles.detailsRow}>
          <Typography sx={styles.field}>Depot Area</Typography>
          <Typography sx={styles.fieldData}>Kashidih</Typography>
        </Box>

        <Box sx={styles.detailsRow}>
          <Typography sx={styles.field}>Frequency</Typography>
          <Typography sx={styles.fieldData}>Once</Typography>
        </Box>

        <Box sx={styles.detailsRow}>
          <Typography sx={styles.field}>Acknowledgement</Typography>
          <Typography sx={styles.fieldData}>Signature on Mobile Device</Typography>
        </Box>

        <Box sx={styles.detailsRow}>
          <Typography sx={styles.field}>Rate/ Pickup</Typography>
          <Typography sx={styles.fieldData}>₹15.00</Typography>
        </Box>
        </div>
        <div>
          <Typography sx={styles.dashboardText}></Typography>
        <Box sx={styles.detailsRow}>
          <Typography sx={styles.field}></Typography>
          <Typography sx={styles.fieldData}></Typography>
        </Box>
        </div>
        </Box> */}

        <Typography sx={styles.head2}>Select Location</Typography>
        {/* <Iframe
          url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117711.91484915413!2d86.17577080000002!3d22.7840284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5e31989f0e2b5%3A0xeeec8e81ce9b344!2sJamshedpur%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1659242270720!5m2!1sen!2sin"
          width={mediaQuery.matches ? "90%" : "70%"}
          height="450px"
          id="map"
          className="myClassname"
          display="initial"
          position="relative"
          allow="fullscreen"
        /> */}
        <Box sx={styles.inputrow}>
          <TextField
            InputProps={{
              readOnly: true,
            }}
            id="Longitude"
            type="text"
            label="Longitude"
            value="22.804565"
            onChange={handleChange}
            sx={styles.inputField}
          />
          <TextField
            InputProps={{
              readOnly: true,
            }}
            id="Latitude"
            type="text"
            label="Latitude"
            value="86.202873"
            onChange={handleChange}
            sx={styles.inputField}
          />
        </Box>

        <Paper variant="outlined" sx={styles.fieldContainer}>
          <Box sx={styles.row}>
            <div>
              <Box sx={styles.detailsRow}>
                <Typography sx={styles.field}>
                  Frequency of Collection per day
                </Typography>
                <Typography sx={styles.fieldData}>{applicantData.frequency === 1 ? "Once" : applicantData.frequency === 2 ? "Twice" : "On a Call"}</Typography>
              </Box>
              <Box sx={styles.detailsRow}>
                <Typography sx={styles.field}>Customer Category</Typography>
                <Typography sx={styles.fieldData}>{applicantData.customer_category === 1 ? "B2B" : "B2C"}</Typography>
              </Box>
            </div>

            <div>
              <Box sx={styles.detailsRow}>
                <Typography sx={styles.field}>Depot</Typography>
                <Typography sx={styles.fieldData}>{applicantData.pickup_area}</Typography>
              </Box>

              <Box sx={styles.detailsRow}>
                <Typography sx={styles.field}>Rate</Typography>
                <Typography sx={styles.fieldData}>{applicantData.rate_proposed} Rupees</Typography>
              </Box>
            </div>
          </Box>
        </Paper>
        {/* <Paper variant="outlined" sx={styles.fieldContainer}>
          <Box sx={styles.row}>
            <UsrSign />
          </Box>
        </Paper> */}
        <br />
        <Box sx={styles.row}>
          <div>
            {/* <Typography sx={styles.dashboardText}>Billing Address</Typography> */}
            <Box sx={styles.detailsRow}>
              <Typography sx={styles.field}>Customer remarks</Typography>
              <Typography sx={styles.fieldData}>
                {applicantData.remarks}
              </Typography>
            </Box>
          </div>
          <div>
            <Box sx={styles.detailsRow}>
              <Typography sx={styles.field}>Depot Manager Remarks</Typography>
              <Typography sx={styles.fieldData}>
                {applicantData.remarks_depot}
              </Typography>
            </Box>
          </div>
        </Box>
        <Box sx={styles.row}>
          <div>
            {/* <Typography sx={styles.dashboardText}>Billing Address</Typography> */}
            <Box sx={styles.detailsRow}>
              <Typography sx={styles.field}>HOD remarks</Typography>
              <Typography sx={styles.fieldData}>
                {applicantData.remarks_hod}
              </Typography>
            </Box>
          </div>
          <div>
            <Box sx={styles.detailsRow}>
              <Typography sx={styles.field}>Billing Remarks</Typography>
              <Typography sx={styles.fieldData}>
                <TextField
                  InputProps={{
                  }}
                  id="remarks_accounts"
                  type="text"
                  label="Billing Remarks"
                  value={creds.remarks_accounts}
                  onChange={handleChange}
                  sx={styles.inputField}
                />
              </Typography>
            </Box>
          </div>
        </Box>





        <Box sx={styles.row}>
          <div>
            <Box sx={styles.detailsRow}>
              <Typography sx={styles.field}>Material Code</Typography>



              <FormControl sx={styles.inputField} >
                <InputLabel id="material_code">Material Code</InputLabel>
                <Select

                  labelId="material_code"
                  id="material_code"
                  value={material_code}
                  //value="urban"
                  label="Material Code"
                  onChange={(e) => {
                    setMaterialCode(e.target.value);
                  }}
                >
                  <MenuItem value="SANI05157">SANI05157 - TRIP</MenuItem>
                  <MenuItem value="MISC091172">MISC091172 - MONTH</MenuItem>
                  <MenuItem value="MISC19148">MISC19148 - NOS</MenuItem>
                </Select>
              </FormControl>



            </Box>
          </div>
          <div>
            <Box sx={styles.detailsRow}>
              <Typography sx={styles.field}></Typography>
              <Typography sx={styles.fieldData}></Typography>
            </Box>
          </div>
        </Box>
        <Typography sx={styles.field}></Typography>
        <Typography sx={styles.fieldData}>

        </Typography>
        <br />
        <Typography sx={styles.dashboardText}>
          Nature Of Business
        </Typography>
        <Box sx={styles.detailsRow}>

          <Typography sx={styles.field}>Category</Typography>
          <Typography sx={styles.fieldData}>
            {applicantData.category}
          </Typography>
          <Typography sx={styles.field}>Sub-Category</Typography>
          <Typography sx={styles.fieldData}>
            {applicantData.sub_category}
          </Typography>
        </Box>
        <Box sx={styles.detailsRow}>
          <Typography sx={styles.field}>Area</Typography>
          <Typography sx={styles.fieldData}>
            {applicantData.rate_category}
          </Typography>
          <Typography sx={styles.field}>Rate</Typography>
          <Typography sx={styles.fieldData}>
            {applicantData.rate_value}
          </Typography>
        </Box>
        <Stack direction="row" spacing={4}>
          <Button
            color="success"
            variant="contained"
            sx={styles.submitBtn}
            onClick={submitHandler}
          >
            Approve
          </Button>
          <Button
            color="error"
            variant="contained"
            sx={styles.submitBtn}
            onClick={async (e) => {
              e.preventDefault();
              changeStatusHandler(10)
              sendSms(`${applicantData.application_no} has been sent to you for your review by accounts`)
            }}
          >
            Send to applicant
          </Button>
          {/* <Button
            color="error"
            variant="contained"
            sx={styles.submitBtn}
            onClick={rejectHandler}
          >
            Reject Application
          </Button> */}
        </Stack>
        <IconButton
          onClick={() => {
            divForScroll.current.scrollIntoView({ behavior: "smooth" });
          }}
          sx={styles.topScrollBtn}
          color="primary"
          component="label"
        >
          <KeyboardArrowUpIcon />
        </IconButton>
      </Container>
    </>
  );
}
