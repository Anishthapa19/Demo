import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { RxCross2 } from "react-icons/rx";
import UserProfile from "../userProfile/UserProfile";
import ProfileTab from "../tab/Tab";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 830,
  height: 570,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 3,
};

const HomePage = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="flex justify-center items-center h-[100vh] font-Urbanist">
      <div
        className="rounded-full bg-[#2BB8D6] text-center"
        onClick={handleOpen}
      >
        <button className="text-white text-[40px] font-medium px-[120px] py-8">
          CLICK HERE
        </button>
      </div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography
            id="modal-title"
            variant="h6"
            component="h2"
            className="flex justify-between px-6 py-3"
          >
            <div className="text-base font-normal">User Info</div>
            <div onClick={handleClose} className="cursor-pointer">
              <RxCross2 fontSize={"27px"} />
            </div>
          </Typography>
          <hr />
          <Typography
            id="modal-userProfile"
            sx={{ my: 1 }}
            className="px-4 py-1"
          >
            <UserProfile />
          </Typography>
          <Typography id="modal-tab" sx={{ mt: 2 }} className="py-1">
            <ProfileTab />
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default HomePage;
