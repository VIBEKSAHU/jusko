
// import React,{useState, useEffect} from "react";
// import { useNavigate } from "react-router-dom";
// // import axios from "axios";
// import Button from "@mui/material/Button";
// import Menu from "@mui/material/Menu";
import BasicDatePicker from "./DateRangePicker/index"
import { Container } from "@mui/material";
import { styles } from "./style";
// import MenuItem from "@mui/material/MenuItem";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
// import ApplicationTable from "./components/ApplicationTable";
// import AllData from "./TableData/allData";

export default function Dashboard(props) {

//   let navigate = useNavigate()

  const mediaQuery = window.matchMedia("(max-width: 650px)");

//   const [applicants, setApplicants] = useState([])
  
//   const [Table, setTable] = useState(
//     // <ApplicationTable
//     //   data={applicants}
//     //   actionLink={props.link || "/applicationDetails"}
//     // />
//   );

//   console.log(applicants)

//   const [tableName, setTableName] = useState("Applications");
 

//   function handleClickPop(e) {
//     setTableName(e.target.innerText);
//     setTable(
//     //   <ApplicationTable
//     //     // data={AllData[e.target.id]}
//     //     actionLink={props.link || "/applicationDetails"}
//     //   />
//     );
//     console.log(e.target.id);
//   }

//   const fetchApplicants = async (e) => {
//     axios
//       .post("/getApplications", {
//         token:localStorage.getItem("adminToken")
//       })
//       .then((res) => setApplicants(res.data?.data));
//   };

//   useEffect(() => {
//     fetchApplicants();
//   }, [])
  

  return (
    <div>
      <Container maxWidth="xl" sx={styles.container}>
      {/* <Button
      sx={styles.logoutBtn}
        onClick={() => {
          localStorage.setItem("adminToken", "");
          navigate("/");
        }}
        variant="contained"
    >Logout
       {props.userName}</Button> */}
        <img
          style={mediaQuery.matches ? styles.imgLogoMobile : styles.imgLogo}
          src={require("../../assets/image/logo.png")}
          alt=""
          srcset=""
        />

        <Typography sx={styles.head}>Bulk Generation System</Typography>
        <Typography sx={styles.dashboardText}>
          {props.admin || props.dashboardname} Dashboard
        </Typography>
        <p style={{ alignSelf: "flex-end", marginTop: "-40px", fontWeight: "bolder" }}>{props.userName} | {props.dashboardname}</p>
        <Box sx={styles.tabItemContainer}>
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
                  <MenuItem onClick={popupState.close}>Profile</MenuItem>
                  <MenuItem onClick={popupState.close}>My account</MenuItem>
                  <MenuItem onClick={popupState.close}>Logout</MenuItem>
                </Menu>
              </React.Fragment>
            )}
          </PopupState> */}

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
                  <MenuItem onClick={popupState.close}>Profile</MenuItem>
                  <MenuItem onClick={popupState.close}>My account</MenuItem>
                  <MenuItem onClick={popupState.close}>Logout</MenuItem>
                </Menu>
              </React.Fragment>
            )}
          </PopupState> */}

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
                  <MenuItem onClick={popupState.close}>Profile</MenuItem>
                  <MenuItem onClick={popupState.close}>My account</MenuItem>
                  <MenuItem onClick={popupState.close}>Logout</MenuItem>
                </Menu>
              </React.Fragment>
            )}
          </PopupState> */}

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
                  <MenuItem onClick={popupState.close}>Profile</MenuItem>
                  <MenuItem onClick={popupState.close}>My account</MenuItem>
                  <MenuItem onClick={popupState.close}>Logout</MenuItem>
                </Menu>
              </React.Fragment>
            )}
          </PopupState> */}
        </Box><br /><br />
        <BasicDatePicker/>
        {/* <Box sx={styles.table}> */}
        {/* <ApplicationTable
              data={applicants}
              setApplicantData={props.setApplicantData}
              actionLink={props.link || "/accountsApplicationDetails"}
            /> */}
          {/* </Box> */}
      </Container>
    </div>
  );
}
