import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { styles } from './styles'

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import DateField from '@mui/material/DateField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';

export default function SearchCustomerByDate(props) {

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
    // navigate("/customerDashboard")
  };

  return (
    <>
      <Dialog open={props.open} onClose={handleClose}>
        <DialogTitle>Select Customer Creation Date</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {/* Please enter OTP we've sent you on +91-xxxxx{props.mobile} */}
          </DialogContentText>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DateRangePicker']}>
              <DateRangePicker localeText={{ start: 'From Date', end: 'To Date' }} />
            </DemoContainer>
          </LocalizationProvider>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Search</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
