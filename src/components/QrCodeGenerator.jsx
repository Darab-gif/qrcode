import React, { useState, useEffect, useRef } from "react";
import QRCode from "qrcode";
import axios from "axios";

const QrCodeGenerator = ({
  file,
  setFile,
  text,
  setText,

  fileQrData,
  setFileQrData,
}) => {
  const [shortUrl, setShortUrl] = useState("");

  const CanvasRef = useRef(null);

  useEffect(() => {
    const canvas = CanvasRef.current;
    canvas.getContext("2d");

    const options = {
      width: 240,
      height: 240,
      margin: 1,
      color: {
        dark: "#407BFF",
        light: "#fff",
      },
    };

    QRCode.toCanvas(canvas, text, options, (error) => {
      if (error) console.error(error);
    });
  }, [text]);

  useEffect(() => {
    if (file) {
      // Created a FileReader to read the file contents
      const fileReader = new FileReader();
      fileReader.onload = () => {
        const fileContents = fileReader.result;

        // Concatenated the file contents and generate the QR code
        const qrData = fileContents;
        setFileQrData(qrData);

        // Shorten the file input using a URL shortening service
        axios
          .post(
            "https://api-ssl.bitly.com/v4/shorten",
            {
              long_url: qrData,
            },
            {
              headers: {
                Authorization: `Bearer ${"d89f88d8e521e4ac21751ba480b49efa4e8560d3"}`,
              },
            }
          )
          .then((response) => {
            setShortUrl(response.data.link);
          })
          .catch((error) => {
            console.error(error);
          });

        const canvas = CanvasRef.current;
        const context = canvas.getContext("2d");

        const options = {
          width: 256,
          height: 256,
          margin: 1,
          color: {
            dark: "#000",
            light: "#fff",
          },
        };

        QRCode.toCanvas(canvas, qrData, options, (error) => {
          if (error) console.error(error);
        });
      };

      // Read the file contents
      fileReader.readAsText(file);
    }
  }, [file, setFileQrData]);

  return (
    <>
      <canvas ref={CanvasRef} />
    </>
  );
};

export default QrCodeGenerator;
