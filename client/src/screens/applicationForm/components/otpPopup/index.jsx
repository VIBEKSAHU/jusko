import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { styles } from './styles'

import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function OtpPopup(props) {

  const handleClose = () => {
    props.setOpen(false);
  };

  let navigate = useNavigate();

  const [otp, setOtp] = useState("")

  const handleSubmit = () => {
    // if(otp === props.otp.toString()){
    //   props.submitHandler()
    // }
    // else{
    //   alert("invalid OTP")
    // }
    props.submitHandler()
  };

  console.log(otp);
  console.log(props.otp)


  return (
    <>
      <Dialog open={props.open} onClose={handleClose}>
        <DialogTitle>OTP Verification</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {/* Please enter OTP we've sent you on +91-{props.phone} */}
            Please skip OTP and verify
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
            }}/>

        {/* <DialogContentText sx={{mt:"25px"}}>
        Please enter OTP we've sent you on {props.email}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="OTP"
            type="number"
            fullWidth
            variant="standard"
            
          />*/}
        </DialogContent> 
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button disabled={props.loading}  onClick={handleSubmit}> {
          props.loading?
          <CircularProgress size="20px"/>
          :
          "Verify"
        }</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
