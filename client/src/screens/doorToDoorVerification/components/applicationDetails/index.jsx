import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { styles } from "./styles";

import Camera from "../camera";

import Iframe from "react-iframe";
import axios from "axios";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
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
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function D2dApplicationDetails({ applicantData }) {
  console.log(applicantData);
  let navigate = useNavigate();

  const mediaQuery = window.matchMedia("(max-width: 650px)");

  const [houseId, setHouseId] = useState("");
  const [image, setImage] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    axios
      .post("/updateCustomerData", {
        applicantId: applicantData.id,
        token: localStorage.getItem("adminToken"),
        updatedData: { house_id: houseId, qr_code_image: image },
      })
      .then((res) => {
        console.log(res.data);
        alert(res.data?.message);
      });
  };

  const divForScroll = useRef(null);

  const [open, setOpen] = useState(false);

  return (
    <>
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
                  {(applicantData.salutation !== null ? applicantData.salutation : '') +
                    ". " +
                    applicantData.first_name +
                    " " +
                    (applicantData.last_name !== null ? applicantData.last_name : '')}
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
              <Typography sx={styles.dashboardText}>GSTIN Details</Typography>
              <Box sx={styles.detailsRow}>
                <Typography sx={styles.field}>GSTIN</Typography>
                <Typography sx={styles.fieldData}>
                  {applicantData.document_no_1}
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
                  {applicantData.billing_region === '34' ? 'Jharkhand' : applicantData.billing_region}
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
                  {applicantData.pickup_region === '34' ? 'Jharkhand' : applicantData.pickup_region}
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

        <Typography sx={styles.head2}>Location</Typography>
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
            value=""
            sx={styles.inputField}
          />
          <TextField
            InputProps={{
              readOnly: true,
            }}
            id="Latitude"
            type="text"
            label="Latitude"
            value=""
            sx={styles.inputField}
          />
        </Box>

        {/*}     <Paper variant="outlined" sx={styles.fieldContainer}>
          <Box sx={styles.row}>
            <div>
              <Box sx={styles.detailsRow}>
                <Typography sx={styles.field}>
                  Frequency of Collection per day
                </Typography>
                <Typography sx={styles.fieldData}>
                  {applicantData.freq}
                </Typography>
              </Box>
              <Box sx={styles.detailsRow}>
                <Typography sx={styles.field}>Monthly Billing Category</Typography>
                <Typography sx={styles.fieldData}>
                  {applicantData?.monthly_billing_category}
                </Typography>
              </Box>
            </div>

            <div>
              <Box sx={styles.detailsRow}>
                <Typography sx={styles.field}>Area</Typography>
                <Typography sx={styles.fieldData}>
                  {applicantData.area}
                </Typography>
              </Box>
</div>
              {/* <Box sx={styles.detailsRow}>
                <Typography sx={styles.field}>Rate</Typography>
                <Typography sx={styles.fieldData}>
                  {applicantData.rate} Rupees
                </Typography>
              </Box> */}
        {/*</div>
          </Box>
        </Paper>*/}
        {/* <Paper variant="outlined" sx={styles.fieldContainer}> */}
        <Box sx={styles.row}>
          <TextField
            id="houseId"
            type="text"
            label="House Id"
            value={houseId}
            onChange={(e) => {
              setHouseId(e.target.value);
            }}
            sx={styles.inputField}
          />
        </Box>
        {/* </Paper> */}

        <Box sx={styles.row2}>
          <Button
            variant="contained"
            endIcon={<CameraAltIcon />}
            onClick={() => {
              setOpen(true);
            }}
          >
            Capture
          </Button>
        </Box>
        <Stack direction="row" spacing={4}>
          <Button
            color="success"
            variant="contained"
            sx={styles.submitBtn}
            onClick={submitHandler}
          >
            submit
          </Button>
        </Stack>
        <IconButton
          onClick={() => {
            divForScroll.current.scrollIntoView({ behavior: "smooth" });
          }}
          sx={styles.topScrollBtn}
          color="primary"
          aria-label="upload picture"
          component="label"
        >
          <KeyboardArrowUpIcon />
        </IconButton>
        <Camera setOpen={setOpen} open={open} setImage={setImage} />
      </Container>
    </>
  );
}
