import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { styles } from './styles'
import axios from "axios";

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function LoginOtpPopup(props) {

  const handleClose = () => {
    props.setOpen(false);
  };

  let navigate = useNavigate();

  const [otp, setOtp] = useState("")

  const handleSubmit = () => {
    // if(otp === props.otp.toString()){
    //   props.otpVerified()
    // }
    // else{
    //   alert("invalid OTP")
    // }

    const verify = axios.post("http://localhost/gq_api/bulk/api/sms/verify/", { mobile_no: localStorage.getItem('mobile_no'), otp: document.getElementById('name').value });
    console.log(verify);

    console.log("User role from local storage ::" + localStorage.getItem('user_role'));
    if (localStorage.getItem('user_role') == 3) navigate("/hodDashboard");
    else if (localStorage.getItem('user_role') == 2) navigate("/depoManagerDashboard");
    // else if (localStorage.getItem('user_role') == 5) navigate("/customerDashboard");
    else if (localStorage.getItem('user_role') == 6) navigate("/doorToDoorVerification");
    else if (localStorage.getItem('user_role') == 4) navigate("/AccountManagerDashboard");
    else if (localStorage.getItem('user_role') == 8) navigate("/supervisor")
    else if (localStorage.getItem('user_role') == 7) navigate("/fieldWorkerDashboard"); //ye krna hai
    else if (localStorage.getItem('user_role') == 1) navigate("/adminDashboard")
    //  else if (role == 8) navigate("/billingmanagerDashboard"); //ye krna hai
    // navigate("/customerDashboard")
  };

  return (
    <>
      <Dialog open={props.open} onClose={handleClose}>
        <DialogTitle>OTP Verification</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter OTP we've sent you on +91-xxxxx{props.mobile}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="OTP"
            type="number"
            fullWidth
            variant="standard"
            onChange={(e) => {
              setOtp(e.target.value);
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Verify</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
