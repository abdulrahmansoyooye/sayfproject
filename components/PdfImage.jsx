"use client";
import { useState } from "react";
import { Document, Page} from "react-pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const PdfImage = ({ pdfUrl }) => {
  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div className="">
      <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
        {/* Render only the first page */}
        <Page pageNumber={1} width={300} className="w-[100%] rounded-2xl"/>
      </Document>
    </div>
  );
};

export default PdfImage;
