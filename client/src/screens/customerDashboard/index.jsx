import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import { Container } from "@mui/material";
import { styles } from "./styles";
import MenuItem from "@mui/material/MenuItem";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import ApplicationTable from "./components/ApplicationTable";
// import AllData from "./TableData/allData";

export default function CustomerDashboard(props) {
console.log("Customer dashboard props :: "+props);
  let navigate = useNavigate()

  const mediaQuery = window.matchMedia("(max-width: 650px)");

  const [applicants, setApplicants] = useState([])

  const [Table, setTable] = useState(
    <ApplicationTable
      data={applicants}
      actionLink={props.link || "/applicationDetails"}
    />
  );

  console.log(applicants)

  const [tableName, setTableName] = useState("Applications");


  function handleClickPop(e) {
    setTableName(e.target.innerText);
    setTable(
      <ApplicationTable
        // data={AllData[e.target.id]}
        actionLink={props.link || "/applicationDetails"}
      />
    );
    console.log(e.target.id);
  }

  const fetchApplicants = async (e) => {
    axios
      .post("/getApplications", {
        token: localStorage.getItem("adminToken")
      })
      .then((res) => setApplicants(res.data?.data));
  };

  useEffect(() => {
    fetchApplicants();
  }, [])


  return (
    <div>
      {/* <Button
        sx={styles.logoutBtn}
        onClick={() => {
          localStorage.setItem("adminToken", "");
          navigate("/somewhere/in/www/admin");
        }}
        variant="text"
      >Logout {props.userName}</Button> */}
      <Container maxWidth="xl" sx={styles.container}>
        <Button
          sx={styles.logoutBtn}
          onClick={() => {
            localStorage.removeItem("adminToken");
            localStorage.removeItem("statusOfApplication");
            localStorage.removeItem("checkStatus");
            navigate("/");
          }}
          variant="text"
        >
          Logout
          {/* {props.userName} */}
        </Button>

        <img
          style={mediaQuery.matches ? styles.imgLogoMobile : styles.imgLogo}
          src={require("../../assets/image/logo.png")}
          alt=""
          srcset=""
        />

        <Typography sx={styles.head}>Bulk Generation System</Typography>
        <Typography sx={styles.dashboardText}>
          Customer Dashboard
        </Typography>
        <p style={{ alignSelf: "flex-end", marginTop: "-40px", fontWeight: "bolder" }}>{props.userName} | Customer</p>
      { console.log("User Name :: "+props.userName)}
        <Box sx={styles.tabItemContainer}>
          <PopupState
            sx={styles.tabItem}
            variant="popover"
            popupId="demo-popup-menu"
          >
            {(popupState) => (
              <React.Fragment>
                <Button
                  sx={styles.tabItem}
                  variant="contained"
                  {...bindTrigger(popupState)}
                >
                  Menu
                  <KeyboardArrowDownIcon />
                </Button>
                <Menu {...bindMenu(popupState)}>
                  {/* <MenuItem onClick={popupState.close}>My Invoices</MenuItem> */}
                  <MenuItem onClick={() => {
                    const email=localStorage.getItem(props.email)
                    navigate("/updateCustProfile");
                  }}>Update Profile</MenuItem>
                  {/* <MenuItem onClick={popupState.close}>Logout</MenuItem> */}
                </Menu>
              </React.Fragment>
            )}
          </PopupState>

          {/* <PopupState
            sx={styles.tabItem}
            variant="popover"
            popupId="demo-popup-menu"
          >
            {(popupState) => (
              <React.Fragment>
                <Button
                  sx={styles.tabItem}
                  variant="outlined"
                  {...bindTrigger(popupState)}
                >
                  Menu
                  <KeyboardArrowDownIcon />
                </Button>
                <Menu {...bindMenu(popupState)}>
                  <MenuItem onClick={popupState.close}>Update Profile</MenuItem>
                  <MenuItem onClick={popupState.close}>My Invoices</MenuItem>
                  {<MenuItem onClick={popupState.close}>Logout</MenuItem> }
                </Menu>
              </React.Fragment>
            )}
          </PopupState> 

          <PopupState
            sx={styles.tabItem}
            variant="popover"
            popupId="demo-popup-menu"
          >
            {(popupState) => (
              <React.Fragment>
                <Button
                  sx={styles.tabItem}
                  variant="outlined"
                  {...bindTrigger(popupState)}
                >
                  Menu
                  <KeyboardArrowDownIcon />
                </Button>
                <Menu {...bindMenu(popupState)}>
                  <MenuItem onClick={popupState.close}>Profile</MenuItem>
                  <MenuItem onClick={popupState.close}>My account</MenuItem>
                  <MenuItem onClick={popupState.close}>Logout</MenuItem>
                </Menu>
              </React.Fragment>
            )}
          </PopupState>

          <PopupState
            sx={styles.tabItem}
            variant="popover"
            popupId="demo-popup-menu"
          >
            {(popupState) => (
              <React.Fragment>
                <Button
                  sx={styles.tabItem}
                  variant="outlined"
                  {...bindTrigger(popupState)}
                >
                  Menu
                  <KeyboardArrowDownIcon />
                </Button>
                <Menu {...bindMenu(popupState)}>
                  <MenuItem onClick={popupState.close}>Profile</MenuItem>
                  <MenuItem onClick={popupState.close}>My account</MenuItem>
                  <MenuItem onClick={popupState.close}>Logout</MenuItem>
                </Menu>
              </React.Fragment>
            )}
          </PopupState> */}
        </Box>
        <Box sx={styles.table}>
          <ApplicationTable
            data={applicants}
            setApplicantData={props.setApplicantData}
            actionLink={props.link || "/accountsApplicationDetails"}
          />
        </Box>
      </Container>
    </div>
  );
}
