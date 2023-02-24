import { useState } from "react";
import Box from "@mui/material/Box";
import { Tab, Tabs, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import UserInfo from "../userProfile/userInfo/UserInfo";
import MedicalHistory from "../userProfile/userInfo/MedicalHistory";
import Attendance from "../userProfile/attendance/Attendance";
import EmploymentInfo from "../userProfile/userInfo/EmploymentInfo";
import { FiEdit } from "react-icons/fi";
import ActivityTimeline from "../userProfile/activityTimeline/ActivityTimeline";

const useStyles = makeStyles(() => ({
  root: {
    "& .MuiTabs-indicator": {
      backgroundColor: "transparent",
    },

    "& .Mui-selected": {
      backgroundColor: "#2BB8D6",
      color: "white",
      borderRadius: "4px",
    },
    "& .MuiTab-root": {
      textTransform: "capitalize",
      fontweight: "500",
    },
    fontFamily: "Urbanist-Regular",
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const ProfileTab = () => {
  const styles = useStyles();
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }} className={styles.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="white"
        className="text-sm flex w-full mt-3 px-3"
      >
        <Tab value="1" label="Info" className="w-[10vw]" {...a11yProps(0)} />
        <Tab
          value="2"
          label="Medical Histoy"
          className="w-[10vw]"
          {...a11yProps(1)}
        />
        <Tab
          value="3"
          label="Employment Info"
          className="w-[10vw]"
          {...a11yProps(2)}
        />
        <Tab
          value="4"
          label="Attendance"
          className="w-[10vw]"
          {...a11yProps(3)}
        />
        <Tab
          value="5"
          label="Activity timeline"
          className="w-[10vw]"
          {...a11yProps(4)}
        />
        <button className="flex gap-2 items-center bg-gray-100 px-4 w-full rounded-md text-sm text-[#565659] ml-2">
          <FiEdit fontSize={"18px"} />
          Edit
        </button>
      </Tabs>
      <div className="mt-2">
        <hr />
      </div>
      <TabPanel value={value} index="1">
        <UserInfo />
      </TabPanel>
      <TabPanel value={value} index="2">
        <MedicalHistory />
      </TabPanel>
      <TabPanel value={value} index="3">
        <EmploymentInfo />
      </TabPanel>
      <TabPanel
        value={value}
        index="4"
        className="bg-gray-100 w-full h-[48vh] bg-opacity-70 rounded-b-xl"
      >
        <Attendance />
      </TabPanel>
      <TabPanel value={value} index="5">
        <ActivityTimeline />
      </TabPanel>
    </Box>
  );
};

export default ProfileTab;
