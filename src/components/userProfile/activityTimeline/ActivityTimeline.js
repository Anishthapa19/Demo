import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Typography } from "@mui/material";
import PdfViewer from "./PdfViewer";
import 'bulma-helpers/css/bulma-helpers.min.css'

const ActivityTimeline = () => {
  return (
    <Timeline
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}
      className="h-[47vh] overflow-y-scroll scroll-my-10"
    >
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot sx={{ bgcolor: "#FF4C51" }} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography className="flex justify-between">
            <div>Submitted Maths assignment late.</div>
            <div className="text-[#3A3541] opacity-40 text-xs">Wednesday</div>
          </Typography>
          <Typography className="text-sm font-normal text-[#3A3541] opacity-40 py-1">
            Assignment was submitted 2 days after the submission date.
          </Typography>
          <Typography>
            {/* <input
              accept="image/*"
              // className={classes.input}
              style={{ display: "none" }}
              id="raised-button-file"
              multiple
              type="file"
            />
            <label htmlFor="raised-button-file">
              <Button
                variant="raised"
                component="span"
                sx={{
                  color: "#3A3541",
                  textTransform: "capitalize",
                  fontweight: "500",
                  fontSize: "12px",
                }}
              >
                <MdPictureAsPdf fontSize={"24px"} color="red" />
                Upload
              </Button>
            </label> */}
            <PdfViewer />
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <br />
      <br />

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot sx={{ bgcolor: "#2D2FF0" }} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <div className="flex justify-between">
            <div className=""> Failed 3rd terminal examination.</div>
            <div className="text-[#3A3541] opacity-40 text-xs">January,12</div>
          </div>
          <Typography className="text-xs font-normal text-[#3A3541] opacity-40 py-1">
            Failed more than 2 subjects.
          </Typography>
          <Typography>
            {/* <input
              accept="image/*"
              // className={classes.input}
              style={{ display: "none" }}
              id="raised-button-file"
              multiple
              type="file"
            />
            <label htmlFor="raised-button-file">
              <Button
                variant="raised"
                component="span"
                sx={{
                  color: "#3A3541",
                  textTransform: "capitalize",
                  fontweight: "500",
                  fontSize: "12px",
                }}
                className="my-5"
              >
                <MdPictureAsPdf fontSize={"24px"} color="red" />
                Upload
              </Button>
            </label> */}
            <PdfViewer />
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <br />
      <br />
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot sx={{ bgcolor: "#2BB8D6" }} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <div className="flex justify-between">
            <div> Didn’t attend science online session</div>
            <div className="text-[#3A3541] opacity-40 text-xs">January,01</div>
          </div>
          <Typography className="text-xs font-normal text-[#3A3541] opacity-40 py-1">
            was absent without notice in science online class.
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <br />
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot sx={{ bgcolor: "#FECA55" }} />
        </TimelineSeparator>
        <TimelineContent>
          <div className="flex justify-between">
            <div> Not qualified to give examination due to low Attendance</div>
            <div className="text-[#3A3541] opacity-40 text-xs">Wednesday</div>
          </div>
          <Typography className="text-xs font-normal text-[#3A3541] opacity-40 py-1">
            was absent without notice in science online class.
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

export default ActivityTimeline;
