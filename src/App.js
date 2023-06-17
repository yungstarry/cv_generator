import React from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import "./styles/styles.scss";
import Instructions from "./components/Instructions";
import Resume from "./components/Resume";

const App = () => {
  const printRef = React.useRef();

  const handleDownloadPdf = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL("image/png");

    const pdf = new jsPDF();
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

    pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("print.pdf");
  };

  return (
    <div>
      <div id="App" ref={printRef}>
        <Instructions />
        <Resume />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* <button
          className="pdfbuttonstyle"
          type="button"
          onClick={handleDownloadPdf}
        >
          Download as PDF
        </button> */}
      </div>
    </div>
  );
};

export default App;
