"use client"
import { useEffect, useRef, useState } from "react";

const PdfImage = ({ pdf, alt }) => {
  const [thumbnail, setThumbnail] = useState(null);
  const [loading, setLoading] = useState(true);
  const iframeRef = useRef(null);

  useEffect(() => {
    const generateThumbnail = () => {
      const iframe = iframeRef.current;
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");

      iframe.onload = () => {
        try {
          const doc = iframe.contentDocument || iframe.contentWindow.document;
          const svg = doc.querySelector("svg"); // Assuming the PDF is rendered as SVG

          if (svg) {
            const bbox = svg.getBBox();
            canvas.width = bbox.width;
            canvas.height = bbox.height;

            // Clear and draw the SVG to canvas
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.drawSvg(svg.outerHTML, bbox.x, bbox.y);

            // Convert canvas to image
            const dataUrl = canvas.toDataURL("image/png");
            setThumbnail(dataUrl);
          } else {
            console.warn("SVG not found in PDF");
            setLoading(false);
          }
        } catch (err) {
          console.error("Error rendering PDF thumbnail:", err);
          setLoading(false);
        }
      };

      iframe.src = pdf; // Set the source of the PDF
    };

    generateThumbnail();
  }, [pdf]);

  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center h-[200px] bg-gray-200 rounded-md">
          Loading...
        </div>
      ) : thumbnail ? (
        <img src={thumbnail} alt={alt} width={300} height={200} className="rounded-md" />
      ) : (
        <div className="text-center text-red-500">Thumbnail not available</div>
      )}
      <iframe
        ref={iframeRef}
        style={{ display: "none" }}
        title={alt}
      />
    </div>
  );
};

export default PdfImage;
