import { Button } from "@mui/material";
import React from "react";
import { MdPictureAsPdf } from "react-icons/md";

const PdfViewer = () => {
  // Function will execute on click of button
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("SamplePDF.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "SamplePDF.pdf";
        alink.click();
      });
    });
  };
  return (
    <>
      <Button>
        <div onClick={onButtonClick} className="flex gap-2">
          <div>
            <MdPictureAsPdf fontSize={"24px"} color="red" />
          </div>
          <div className="lowercase text-black">Download.PDF</div>
        </div>
      </Button>
    </>
  );
};

export default PdfViewer;
