import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";


export default function BasicTextFields() {


    let navigate = useNavigate();


  return (
    <>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      
      <TextField id="filled-basic" label="From Date" variant="filled" />
      <TextField id="filled-basic" label="To Date" variant="filled" />
    </Box>
    <br />
    <br />
     <Button variant="contained" onClick={()=>navigate("/active ")}>Search</Button>

      </>
  );
}
